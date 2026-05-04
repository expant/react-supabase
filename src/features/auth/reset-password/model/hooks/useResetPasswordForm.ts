import { useState, type FormEvent } from "react";
import { useResetPassword } from "./useResetPassword";
import type { ResetPasswordFormErrors } from "../types";

export function useResetPasswordForm() {
  const { handleReset, loading, isSuccess } = useResetPassword();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<ResetPasswordFormErrors>({});

  const validate = (): boolean => {
    const next: ResetPasswordFormErrors = {};
    if (!email.trim()) next.email = "Пожалуйста, введите свой email!";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    handleReset({ email: email.trim() });
  };

  return { email, setEmail, errors, loading, isSuccess, handleSubmit };
}
