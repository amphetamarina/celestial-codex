# WIP: openai-assistant library

This is a library that allows you to interact with the OpenAI Assistant API. It provides a simple and intuitive interface.

## Installation

```
pnpm i @marinacabs/openai-assistant
```

## Usage

Here is a basic example of how to use this library:

```typescript
import AssistantLibrary from "@marinacabs/openai-assistant";

const assistant = new AssistantLibrary("OPENAI_API_KEY", "ASSISTANT_ID");

const response = await assistant.getResponse("Hello, assistant!");
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
