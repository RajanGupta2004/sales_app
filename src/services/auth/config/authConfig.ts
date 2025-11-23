// export const msalConfig = {
//   auth: {
//     clientId: "7755ac18-545c-43a3-acf3-2387a656411c",
//     redirectUri: "msal7755ac18-545c-43a3-acf3-2387a656411c://auth",
//     authority:
//       "https://login.microsoftonline.com/902f2a40-dc74-4a25-bbea-f71eed852d5c",
//     scopes: ["User.Read"],
//   },
// };

export const azureConfig = {
  issuer:
    "https://login.microsoftonline.com/902f2a40-dc74-4a25-bbea-f71eed852d5c/v2.0", // teanent id
  clientId: "7755ac18-545c-43a3-acf3-2387a656411c",
  redirectUrl: "com.sales_app://oauthredirect",
  scopes: ["openid", "profile", "email", "User.Read"],
  additionalParameters: {},
  serviceConfiguration: {
    authorizationEndpoint:
      "https://login.microsoftonline.com/902f2a40-dc74-4a25-bbea-f71eed852d5c/oauth2/v2.0/authorize", // teanent
    tokenEndpoint:
      "https://login.microsoftonline.com/902f2a40-dc74-4a25-bbea-f71eed852d5c/oauth2/v2.0/token", // teanent id
  },
};
