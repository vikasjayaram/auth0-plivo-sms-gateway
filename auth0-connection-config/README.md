# Custom Passwordless connection in Auth0


### Version
1.0.0


# Initial Setup & Configuration

- Use the [Auth0 Managmeent API](https://auth0.com/docs/api/management/v2#!/Connections/post_connections) to create a custom `sms_gateway` connection
- The `gateway_url` is your Webtask URL created in the `webtask` directory
- The `name` is the name of the connection that is required for Authentication.
 

*Note* the custom sms gateway connection will not work with Lock Passwordless. You will need to use custom UI with [auth0.js](https://github.com/auth0/auth0.js)


