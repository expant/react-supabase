import { useState, useEffect, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { useUpdatePassword } from "./useUpdatePassword";
import type { NewPasswordFormErrors } from "../types";

export function useNewPasswordForm() {
  const navigate = useNavigate();
  const { handleUpdate, loading, isSuccess } = useUpdatePassword();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<NewPasswordFormErrors>({});

  useEffect(() => {
    if (isSuccess) navigate("/feed");
  }, [isSuccess, navigate]);

  const validate = (): boolean => {
    const next: NewPasswordFormErrors = {};

    if (!password) next.password = "Пожалуйста, введите новый пароль!";

    if (password && confirmPassword && password !== confirmPassword) {
      next.confirmPassword = "Пароли не совпадают!";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    handleUpdate({ password });
  };

  return {
    errors,
    loading,
    password,
    showConfirm,
    showPassword,
    confirmPassword,
    handleSubmit,
    setPassword,
    setConfirmPassword,
    toggleConfirm: () => setShowConfirm((v) => !v),
    togglePassword: () => setShowPassword((v) => !v),
  };
}
