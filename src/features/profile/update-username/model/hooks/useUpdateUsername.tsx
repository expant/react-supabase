import { useState, type FormEvent } from "react";
import { message } from "antd";
import { updateUsername } from "@/entities/profile/api/profileApi";
import { handleError } from "../getErrorMessage";
import { validateUsernameUpdate } from "@/shared/lib/validateUsername";
import type { UpdateUsernameFormProps } from "../types";

export function useUpdateUsername({
  profile,
  setUsername,
}: UpdateUsernameFormProps) {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newUsername = value.trim();
    const userId = profile?.id;

    if (!userId) return;

    const error = validateUsernameUpdate(newUsername, profile.username);

    if (error) {
      message.error(error);
      return;
    }

    setIsLoading(true);

    try {
      await updateUsername(userId, newUsername);
      setUsername(newUsername);
      message.success("Username успешно изменен");
      setValue("");
    } catch (e) {
      message.error(handleError(e as Error));
    } finally {
      setIsLoading(false);
    }
  };

  return { value, setValue, isLoading, handleSubmit };
}
