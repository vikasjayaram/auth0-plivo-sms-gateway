# auth0-plivo-sms-gateway
Using Webtask for a custom Passwordless connection in Auth0
- [auth0-connection-config](https://github.com/vikasjayaram/auth0-plivo-sms-gateway/tree/master/auth0-connection-config) contains a sample connection config that can be used to configure a custom SMS gateway.
- [webtask](https://github.com/vikasjayaram/auth0-plivo-sms-gateway/tree/master/webtask) contains the webtask to send SMS via [Plivo](https://www.plivo.com/) 

# Login

```sh
curl --request POST \
  --url 'https://{YOUR AUTH0 ACCOUNT}.auth0.com/passwordless/start' \
  --header 'content-type: application/json' \
  --data '{"client_id":"A2B........rXYZ", "connection":"{sms-connection-name}", "phone_number":"+12223334444", "send":"code", "authParams":{"scope": "openid","state": "YOUR_STATE"}}'

```