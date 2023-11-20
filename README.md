# Celestial Codex

Welcome, interstellar traveler, to a celestial codex that allows you to commune with the vast intelligence of the OpenAI Assistant API. This library is a cosmic conduit, providing a simple and intuitive interface to the stars of knowledge.


## Installation

To install this celestial codex, use the following incantation in your terminal:

```
npm i @tecnocapital/celestial-codex
```

## Usage

To commune with the cosmic intelligence, follow this basic example:

```typescript
import AssistantLibrary from "@tecnocapital/celestial-codex";

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

To develop this celestial codex, you will need the following:

- A devbox (optional)
- The bun tool

Use the following incantations to start your journey:

```bash
devbox shell
bun install
bun run index.ts
```

To test your celestial codex:


```bash
bun test
```

This project was created using `bun init` in bun v1.0.10. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

This project was created using bun init in bun v1.0.10. Bun is a fast all-in-one JavaScript runtime, a cosmic tool for the modern developer.
