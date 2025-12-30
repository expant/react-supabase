import { useState } from "react";
import { Form, message } from "antd";
import { updateEmail } from "@/features/auth/update-email/api/updateEmail";
import type { UpdateEmailFormValues } from "../types";

export function useUpdateEmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm<UpdateEmailFormValues>();

  const handleSubmit = async () => {
    const newEmail = form.getFieldValue("email").trim();

    setIsLoading(true);
    try {
      await updateEmail(newEmail);
      message.success(
        "Для подтверждения смены email было отправлено письмо на новый адресс"
      );
      form.resetFields();
    } catch (e) {
      message.error(e instanceof Error ? e.message : "Ошибка изменения email");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    handleSubmit,
  };
}
