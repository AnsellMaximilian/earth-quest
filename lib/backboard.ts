"use server";

import { BackboardClient } from "backboard-sdk";

const client = new BackboardClient({ apiKey: "YOUR_API_KEY" });

export async function createAssistant() {
  return client.createAssistant({
    name: "My First Assistant",
    system_prompt: "You are helpful.",
  });
}
