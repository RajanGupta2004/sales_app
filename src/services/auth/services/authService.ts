import { PublicClientApplication } from "react-native-msal";
import { msalConfig } from "../config/authConfig";
import { clearToken, saveToken } from "../../../utils/storage";

const pca = new PublicClientApplication(msalConfig);

export const loginWithMicrosoft = async () => {
  try {
    const result = await pca.acquireToken({
      scopes: ["User.Read"],
    });

    if (result?.accessToken) {
      await saveToken(result.accessToken);
      return result;
    }

    throw new Error("No token returned");
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const logout = async () => {
  await clearToken();
  await pca.logout();
};
