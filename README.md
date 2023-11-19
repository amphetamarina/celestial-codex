# WIP: openai-assistant library

This is a library that allows you to interact with the OpenAI Assistant API. It provides a simple and intuitive interface.

## Installation

```
pnpm i @marinarosa/openai-assistant
```

## Usage

Here is a basic example of how to use this library:

```typescript
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

``````

## Developing

### Requirements
- devbox (optional)
- bun

```bash
devbox shell
bun install
bun run index.ts
```


To test:

```bash
bun test
```

This project was created using `bun init` in bun v1.0.10. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
