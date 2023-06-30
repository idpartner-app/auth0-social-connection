IDPartner uses bank identity data to offer a fast-lane to engage and convert verified users. Know that your customers are human - and know their real names if you need to - without a high-friction scan of their identity documents.

## Prerequisites

1. Create an [Auth0](https://auth0.com/signup) account and tenant.
1. Sign up for an [IdPartner](https://console.idpartner.com/#/signup) account.
1. Create a regular web application. Learn more about creating applications in the [Auth0 documentation](https://auth0.com/docs/get-started/auth0-overview/create-applications).
1. Verify your email by clicking on the "verify account" link in your inbox.
1. Sign in to your IdPartner account and register an OTP.

## Set up IDPartner

1. Sign in to [IdPartner](https://console.idpartner.com/#/login).
1. Click on "Applications" in the left panel.
1. Click on "+ Add Sandbox application" in the top right corner.
1. Select "client_secret_basic" as the authentication method.
1. Provide an application name for the "Auth0 social connection".
1. Add a valid URL for the logo of your application.
1. Set "https://auth-api.idpartner.com/oidc-proxy/proxy/auth0/auth" as the origin URL.
1. Set "https://auth-api.idpartner.com/oidc-proxy/proxy/auth0/callback" as the redirect URL.
1. Click the "Next step" button.
1. Click the "Create application" button.
1. Take note of the client_id and client_secret from the "Auth0 social connection" record.

## Add the Connection

1. Click on **Add Integration** at the top of the page.
1. Read and accept the necessary access requirements, then select **Continue**.
1. Configure the integration using the following fields:
   - Set a name for the integration.
   - Set "https://auth-api.idpartner.com/oidc-proxy/proxy/auth0/auth" as the authorization URL.
   - Set "https://auth-api.idpartner.com/oidc-proxy/proxy/auth0/token" as the token URL.
   - Set "openid email profile" as the scope.
   - Enable the toggle button for "Separate scopes using a space".
   - Enter the copied client_id as the Client ID.
   - Enter the copied client_secret as the Client Secret.
   - Copy and paste the content of [this script](example.com) into the "Fetch User Profile Script" field.
1. Enable the toggle button for "Sync user profile attributes at each login".
1. Select **Create**.
1. In the **Applications** view, choose the applications that should use this connection to log in.

## Test Connection

You're now ready to [test this connection](https://auth0.com/docs/authenticate/identity-providers/test-connections).

## Troubleshooting

If you encounter any issues, please contact us at support@idpartner.com.
