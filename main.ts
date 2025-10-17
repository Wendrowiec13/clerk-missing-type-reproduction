import type {WebhookEvent} from "@clerk/backend"

const webhookData = {} as WebhookEvent;

if (webhookData.type === "subscriptionItem.active") {
  const payer = webhookData.data.payer;
}