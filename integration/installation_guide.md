IDPartner offers the fast-lane to engage and convert verified users.

## Prerequisites

1. An Auth0 account and tenant. [Sign up for free](https://auth0.com/signup).
1. An IdPartner account. [Sign up here](https://console.idpartner.com/#/signup)
1. Create a regular web application. [Learn more](https://auth0.com/docs/get-started/auth0-overview/create-applications)
1. Verify your email by "clicking verify account" in your inbox
1. Sign in and register an OTP. [Sign in here](https://console.idpartner.com/#/login)

## Set up IDPartner

1. IdPArtner sign in. [Sign in here](https://console.idpartner.com/#/login)
1. Click on "Applications" on the left panel
1. Click "+ Add Sandbox application" in the top right corner
1. Select "client_secret_basic" as the "Auth method"
1. Add "Auth0 social connection" as the "Application name"
1. Add a valid URL for the logo of your applciation in the "Application logo"
1. Add "https://auth-api.idpartner.com/oidc-proxy/proxy/auth" as the "Origin URL"
1. Add "https://auth-api.idpartner.com/oidc-proxy/proxy/callback" as the "Redirect URL"
1. Click the "Next step" button
1. Click the "Create application" button
1. Grab the client_id and the client_secret form the record with "Auth0 social connection" name

## Add the Connection

1. Select **Add Integration** (at the top of this page).
1. Read the necessary access requirements, and select **Continue**.
1. Configure the integration using the following fields:
   1. Set a name
   1. Add "https://auth-api.idpartner.com/oidc-proxy/proxy/auth" as the "Authorization URL"
   1. Add "https://auth-api.idpartner.com/oidc-proxy/proxy/token" as the "Token URL"
   1. Add "openid email profile" as the "Scope"
   1. Turn on the toggle button for "Separate scopes using a space"
   1. Add the copied client_id as the "Client ID"
   1. Add the copied client_secret as the "Client Secret"
   1. Copy the content of this [script](example.com) and pasted as the "Fetch User Profile Script"
1. Turn on the toggle button for "Sync user profile attributes at each login"
1. Select **Create**.
1. In the **Applications** view, choose the Applications that should use this Connection to log in.

## Test connection

You're ready to [test this Connection](https://auth0.com/docs/authenticate/identity-providers/test-connections).

## Troubleshooting

Contact us at support@idpartner.com
