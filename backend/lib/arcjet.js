import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";

import "dotenv/config";

//init arcjet
export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"], // Track requests by IP
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
        "CATEGORY:MONITOR", // Allow Postman as a monitoring tool
        "CATEGORY:PREVIEW", // Allow preview services like Slack, Discord
      ],
    }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 20, // Refill 5 tokens per interval
      interval: 1, // Refill every 10 seconds
      capacity: 20, // Bucket capacity of 10 tokens
    }),
  ],
});