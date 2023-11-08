# @marinacabs/openai-assistant

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```


To test:

```bash
bun test
```

Example on how to use this library:

```typescript
import AssistantLibrary from "@marinacabs/openai-assistant";

const assistant = new AssistantLibrary("OPENAI_API_KEY", "ASSISTANT_ID");
assistant.getResponse("Hello, assistant!").then(response => {
  console.log(response);
});
```
This project was created using `bun init` in bun v1.0.10. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
