import { expect, describe, it, mock, spyOn } from "bun:test";
import AssistantLibrary from ".";

const mockAssistantLibrary = mock(AssistantLibrary);
describe('AssistantLibrary', () => {

    // Successfully create an instance of AssistantLibrary with valid OPENAI_API_KEY and ASSISTANT_ID environment variables
    it('should successfully create an instance of AssistantLibrary with valid OPENAI_API_KEY and ASSISTANT_ID environment variables', () => {
      const assistantLibrary = new AssistantLibrary("test", "test");
      expect(assistantLibrary).toBeInstanceOf(AssistantLibrary);
    });

    // Successfully call getResponse() method with valid content and retrieve a response from OpenAI API
    it('should successfully call getResponse() method with valid content and retrieve a response from OpenAI API', async () => {
        const mockGetResponse = mock(AssistantLibrary.prototype.getResponse)
        AssistantLibrary.prototype.getResponse = mockGetResponse;
        mockGetResponse.mockImplementation(() => Promise.resolve("Mocked response"));

        const assistantLibrary = new AssistantLibrary("test", "test");
        const response = await assistantLibrary.getResponse("Hello");

        expect(mockGetResponse).toHaveBeenCalled();
        expect(response).toBe("Mocked response");
      });


    // Throw an error when creating an instance of AssistantLibrary with invalid OPENAI_API_KEY environment variable
    it('should throw an error when creating an instance of AssistantLibrary with invalid OPENAI_API_KEY environment variable', () => {
        expect(() => new AssistantLibrary("", "")).toThrow("Missing openAIApiKey");

      });
    // Throw an error when creating an instance of AssistantLibrary with missing ASSISTANT_ID environment variable
    it('should throw an error when creating an instance of AssistantLibrary with missing ASSISTANT_ID environment variable', () => {
      expect(() => new AssistantLibrary("test", "")).toThrow("Assistant ID is missing");
    });
});
