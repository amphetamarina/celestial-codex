import AssistantLibrary from "@tecnocapital/celestial-codex";

const apiKey = process.env.OPENAI_API_KEY;
const assistantId = process.env.ASSISTANT_ID;

if (!apiKey || !assistantId) {
  console.error('Environment variables OPENAI_API_KEY or ASSISTANT_ID are not defined');
  process.exit(1);
}

const assistant = new AssistantLibrary(apiKey, assistantId);

// Get the command-line argument
const arg = process.argv[2];

if (!arg) {
  console.error('Please provide an argument for the assistant.getResponse call');
  process.exit(1);
}

try {
    console.log("waiting for assistant", process.env.ASSISTANT_ID)
  const response: any = await assistant.getResponse(arg);
  if (response && response.value) {
    console.log(response.value);
  } else {
    throw new Error('Response or response value is undefined');
  }
} catch (error) {
  console.error('Error occurred while getting response:', error);
}
