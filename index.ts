import OpenAI from "openai";

class AssistantLibrary {
    private openai: OpenAI;
    private assistantId: string;
    private openAIApiKey: string;

    constructor(openAIApiKey: string, assistantId: string) {
        const MISSING_OPENAI_API_KEY_ERROR = "Missing openAIApiKey";
        const MISSING_ASSISTANT_ID_ERROR = "Assistant ID is missing";
        if (!openAIApiKey) throw new Error(MISSING_OPENAI_API_KEY_ERROR);
        if (!assistantId) throw new Error(MISSING_ASSISTANT_ID_ERROR);
        this.openai = new OpenAI({
            apiKey: openAIApiKey,
        });
        this.assistantId = assistantId;
        console.info("Assistant configured and ready.")
    }

    private getAssistant(): Promise<any> {
        return this.openai.beta.assistants.retrieve(this.assistantId);
    }

    private createThread(): Promise<any> {
        return this.openai.beta.threads.create({});
    }

    private createMessage(threadId: string, content: string): Promise<any> {
        return this.openai.beta.threads.messages.create(
            threadId,
            {
                role: "user",
                content: content
            }
        );
    }

    private createRun(threadId: string, assistantId: string): Promise<any> {
        return this.openai.beta.threads.runs.create(
            threadId,
            {
                assistant_id: assistantId
            }
        );
    }

    public async getResponse(content: string, threadId?: string) {
        const assistant = await this.getAssistant();
        let passedThreadId = threadId;
        if (!passedThreadId) {
            const thread = await this.createThread();
            passedThreadId = thread.id;
        }

        if (!passedThreadId) throw new Error('Could not create thread');
        await this.createMessage(passedThreadId, content);
        const run = await this.createRun(passedThreadId, assistant.id);
        return new Promise((resolve) => {
            const checkCompletion = async () => {
                if (!passedThreadId) throw new Error('Could not create thread');
                const retrievedRun = await this.openai.beta.threads.runs.retrieve(passedThreadId, run.id);
                if (retrievedRun.completed_at !== null) {
                    const messageList = await this.openai.beta.threads.messages.list(passedThreadId)
                    const assistantContent = messageList.data.filter(message => message.role === 'assistant');
                    const messageFromAssistant = assistantContent[0].content[0].type ==  "text" ? assistantContent[0].content[0].text : "No response";
                    resolve(messageFromAssistant);
                } else {
                    setTimeout(checkCompletion, 5000);
                }
            };

            checkCompletion();
        });
    }
}

export default AssistantLibrary;
