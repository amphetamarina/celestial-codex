import AssistantLibrary from "@marinarosa/openai-assistant";

const assistant = new AssistantLibrary("your-openai-key", "your-assistant-id");

try {
  const response: any = await assistant.getResponse("tell me about I/O redirectors");
  if (response && response.value) {
    console.log(response.value);
  } else {
    throw new Error('Response or response value is undefined');
  }
} catch (error) {
  console.error('Error occurred while getting response:', error);
}
