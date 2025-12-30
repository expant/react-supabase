import { useState } from "react";
import { Form, message } from "antd";
import { updateUsername } from "@/entities/profile/api/profileApi";
import { handleError } from "../getErrorMessage";
import { validateUsernameUpdate } from "@/shared/lib/validateUsername";
import type {
  UpdateUsernameFormValues,
  UseUpdateUsernameFormArgs,
} from "../types";

export function useUpdateUsername({
  profile,
  setUsername,
}: UseUpdateUsernameFormArgs) {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm<UpdateUsernameFormValues>();

  const handleSubmit = async () => {
    const newUsername = form.getFieldValue("username").trim();
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
      form.resetFields();
    } catch (e) {
      message.error(handleError(e as Error));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    profile,
    isLoading,
    form,
    handleSubmit,
  };
}
