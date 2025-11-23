import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const TENANT_ID = "902f2a40-dc74-4a25-bbea-f71eed852d5c";
const CLIENT_ID = "7755ac18-545c-43a3-acf3-2387a656411c";

const discovery = {
  authorizationEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/authorize`,
  tokenEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
};

export const loginWithAzure = async () => {
  try {
    const redirectUri = AuthSession.makeRedirectUri({
      scheme: "com.sales_app",
    });

    console.log("Redirect URI:", redirectUri);

    // Create the auth request
    const authRequestConfig = {
      clientId: CLIENT_ID,
      scopes: ["openid", "profile", "email", "User.Read", "offline_access"],
      redirectUri,
      responseType: AuthSession.ResponseType.Code,
      usePKCE: true,
      extraParams: {
        prompt: "select_account",
      },
    };

    const authRequest = new AuthSession.AuthRequest(authRequestConfig);

    // Prompt the user to authenticate
    const result = await authRequest.promptAsync(discovery);

    if (result.type === "success") {
      const { code } = result.params;

      // Exchange code for tokens
      const tokens = await exchangeCodeForTokens(
        code,
        redirectUri,
        authRequest.codeVerifier!
      );

      console.log("✅ Login Successful!");
      console.log("Access Token:", tokens.access_token);
      console.log("Refresh Token:", tokens.refresh_token);

      return tokens;
    } else if (result.type === "error") {
      throw new Error(result.error?.message || "Authentication failed");
    } else {
      throw new Error("Authentication cancelled");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

const exchangeCodeForTokens = async (
  code: string,
  redirectUri: string,
  codeVerifier: string
) => {
  const tokenEndpoint = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;

  const body = new URLSearchParams({
    client_id: CLIENT_ID,
    code,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
    code_verifier: codeVerifier,
  });

  const response = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Token exchange failed: ${error}`);
  }

  return response.json();
};
