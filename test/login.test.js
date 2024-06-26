const mockLogin = jest.fn(() =>
  Promise.resolve({data: {token: 'xxxxxx', tokenExpiresInSeconds: 600}})
);

test('Login service should return token and tokenExpiresInSeconds', async () => {
  mockLogin().then(({data}) => {
    const {token, tokenExpiresInSeconds} = data;
    expect(typeof token === 'string').toBeTruthy();
    expect(typeof tokenExpiresInSeconds === 'number').toBeTruthy();
  });
});
