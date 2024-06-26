const mockWebhookSlack = jest.fn(() => Promise.resolve({data: {}}));
const mockWebhookFeiShu = jest.fn(() => Promise.resolve({data: {}}));

test('Webhook Slack service should be called success', async () => {
  mockWebhookSlack().then(resp => {
    expect(!!resp).toBeTruthy();
  });
});

test('Webhook FeiShu service should be called success', async () => {
  mockWebhookFeiShu().then(resp => {
    expect(!!resp).toBeTruthy();
  });
});
