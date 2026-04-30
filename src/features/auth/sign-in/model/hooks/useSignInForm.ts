import { useState, type FormEvent } from "react";
import { useSignIn } from "./useSignIn";
import type { SignInFormErrors } from "../types";

export function useSignInForm() {
  const { handleSignIn, loading } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<SignInFormErrors>({});

  const validate = (): boolean => {
    const next: SignInFormErrors = {};
    if (!email.trim()) next.email = "Пожалуйста, введите свой email!";
    if (!password) next.password = "Пожалуйста, введите свой пароль!";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    handleSignIn({ email: email.trim(), password });
  };

  const togglePassword = () => setShowPassword((v) => !v);

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    togglePassword,
    errors,
    loading,
    handleSubmit,
  };
}
