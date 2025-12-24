import { useState } from "react";
import { useNavigate } from "react-router";
import { message } from "antd";
import { signUp } from "../../api/signUp";
import { validateUsernameCreate } from "@/shared/lib/validateUsername";
import { getErrorMessage } from "../signUpErrors";
import type { SignUpFormValues } from "../types";

export function useSignUp() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (values: SignUpFormValues) => {
    const username = values.username?.trim() ?? "";
    const error = validateUsernameCreate(username);

    if (error) {
      message.error(error);
      return;
    }

    try {
      setLoading(true);
      await signUp({ ...values, username });
      navigate("/feed", { replace: true });
    } catch (e) {
      message.error(getErrorMessage(e as Error));
    } finally {
      setLoading(false);
    }
  };

  return { handleSignUp, loading };
}
