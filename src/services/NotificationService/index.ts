import apis from '@/apis';

const {webHookSlack, webhookFeiShu} = apis;

const NotificationService = {
  createWebhookSlack: async (payload: any, options: any) =>
    await webHookSlack(payload, options),
  createWebhookFeiShu: async (payload: any, options: any) =>
    await webhookFeiShu(payload, options),
};

export default NotificationService;
