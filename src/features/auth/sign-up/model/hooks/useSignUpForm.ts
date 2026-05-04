import { useState, type FormEvent } from "react";
import { useSignUp } from "./useSignUp";
import type { SignUpFormErrors } from "../types";

export function useSignUpForm() {
  const { handleSignUp, loading } = useSignUp();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<SignUpFormErrors>({});

  const validate = (): boolean => {
    const next: SignUpFormErrors = {};
    if (!email.trim()) next.email = "Пожалуйста, введите свой email!";
    if (!password) next.password = "Пожалуйста, введите свой пароль!";
    else if (password.length < 6) next.password = "Пароль должен быть не менее 6 символов!";
    if (password && confirmPassword && password !== confirmPassword) {
      next.confirmPassword = "Пароли не совпадают!";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    handleSignUp({ email: email.trim(), password, username: username.trim() });
  };

  return {
    email, setEmail,
    username, setUsername,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    showPassword, togglePassword: () => setShowPassword((v) => !v),
    showConfirm, toggleConfirm: () => setShowConfirm((v) => !v),
    errors, loading, handleSubmit,
  };
}
