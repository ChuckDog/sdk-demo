import apis from '../../apis';

const {webHookSlack, webhookFeiShu} = apis;

const NotificationService = {
  createWebhookSlack: async (payload: any) => await webHookSlack(payload),
  createWebhookFeiShu: async (payload: any) => await webhookFeiShu(payload),
};

export default NotificationService;
