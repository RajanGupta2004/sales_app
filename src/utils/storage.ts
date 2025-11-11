import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToken = async (token: string) => {
  await AsyncStorage.setItem("accessToken", token);
};

export const getToken = async () => {
  return await AsyncStorage.getItem("accessToken");
};

export const clearToken = async () => {
  await AsyncStorage.removeItem("accessToken");
};
