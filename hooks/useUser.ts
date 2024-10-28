import { useState, useEffect } from "react";

import { useAuth } from "./useAuth";

export const useUser = () => {
  const [user, setUser] = useState<_user | null>(null);
  const [loading, setLoading] = useState(true);
  const { getUser, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      const isAuth = await isAuthenticated();
      if (isAuth) {
        const userData = await getUser();
        setUser(userData);
      }
      setLoading(false);
    };

    fetchUser();
  }, [getUser, isAuthenticated]);

  return { user, loading };
};
