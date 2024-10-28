import { getCookie, setCookie, removeCookie } from "@/lib/cookiesUtils";

export const useAuth = () => {
  const getUser: () => Promise<_user | null> = async () => {
    const user = getCookie("user");
    if (user) return JSON.parse(user) as _user;

    const access = getCookie("access");
    if (!access) return null;

    // TODO: call API to get user
    return null;
  };

  const setUser = (user: _user) => {
    setCookie("user", JSON.stringify(user), {
      expires: 3,
    });
  };

  const setToken = (access: string) => {
    setCookie("access", access, {
      expires: 3,
    });
  };

  const removeToken = () => {
    removeCookie("access");
  };

  const accessToken = async () => {
    const access = getCookie("access");
    if (!access) return null;

    return access;
  };

  const isAuthenticated = async () => {
    const user = await getUser();
    return user !== null;
  };

  return {
    getUser,
    setUser,
    setToken,
    removeToken,
    accessToken,
    isAuthenticated,
  };
};
