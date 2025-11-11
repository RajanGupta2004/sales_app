import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  loginWithMicrosoft,
  logout,
} from "../services/auth/services/authService";
import { clearAuth, setAuth } from "../store/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogin = async () => {
    const result = await loginWithMicrosoft();
    dispatch(
      setAuth({ accessToken: result.accessToken, user: result.account })
    );
  };

  const handleLogout = async () => {
    await logout();
    dispatch(clearAuth());
  };

  return { isAuthenticated, user, handleLogin, handleLogout };
};
