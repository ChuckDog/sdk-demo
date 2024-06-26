import apis from '../../apis/index';

const {webHookSlack, webhookFeiShu} = apis;

const NotificationService = {
  createWebhookSlack: async payload => await webHookSlack(payload),
  createWebhookFeiShu: async payload => await webhookFeiShu(payload),
};

export default NotificationService;
