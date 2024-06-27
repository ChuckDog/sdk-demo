# sdk-demo

This is a sdk demo that allows you to use goclick services.
Which include goclick LoginService and NotificationService.

## How to Install

```
npm install sdk-demo???
```

## Usage

Frontend is available. You can use it in your nextjs projects. For example:

import SDK from 'sdk-demo';
const {LoginService} = SDK;
const {token, tokenExpiresInSeconds} = await LoginService.login({
account: email,
password,
});

Frontend is also available. You can use it in your nestjs projects. For example:

import * as SDK from 'sdk-demo';
const {LoginService} = SDK;
...
const {accessToken, refreshToken} = await LoginService.login(
body
);

## Documentation

Still working on the other features.

## License

#### MIT License
