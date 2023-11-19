import AssistantLibrary from "@marinarosa/openai-assistant";

const assistant = new AssistantLibrary(process.env.OPENAI_API_KEY, process.env.ASSISTANT_ID);

// Get the command-line argument
const arg = process.argv[2];

if (!arg) {
  console.error('Please provide an argument for the assistant.getResponse call');
  process.exit(1);
}

try {
  const response: any = await assistant.getResponse(arg);
  if (response && response.value) {
    console.log(response.value);
  } else {
    throw new Error('Response or response value is undefined');
  }
} catch (error) {
  console.error('Error occurred while getting response:', error);
}
