import { type ReactNode, useEffect, useState } from "react";
import { useUser } from "@/features/auth/model/hooks/useUser";
import { getProfile } from "@/entities/profile/api/profileApi";
import { ProfileContext } from "./context";
import type { Profile } from "@/entities/profile/model/types";

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const user = useUser();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        setIsLoading(true);

        const data = await getProfile(user.id);

        if (isMounted) setProfile(data);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [user.id]);

  const setUsername = (username: string) => {
    setProfile((prev) => (prev ? { ...prev, username } : prev));
  };

  return (
    <ProfileContext.Provider value={{ profile, isLoading, setUsername }}>
      {children}
    </ProfileContext.Provider>
  );
}
