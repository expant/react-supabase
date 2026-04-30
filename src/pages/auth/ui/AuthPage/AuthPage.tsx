import { useState } from "react";
import { AuthCard } from "@/shared/ui/auth-card/AuthCard";
import { SignInForm } from "@/features/auth/sign-in/ui/SignInForm";
import { SignUpForm } from "@/features/auth/sign-up/ui/SignUpForm";
import styles from "./AuthPage.module.css";

type Tab = "signin" | "signup";

export function AuthPage() {
  const [tab, setTab] = useState<Tab>("signin");

  return (
    <AuthCard>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === "signin" ? styles.tabActive : ""}`}
          onClick={() => setTab("signin")}
        >
          Вход
        </button>
        <button
          className={`${styles.tab} ${tab === "signup" ? styles.tabActive : ""}`}
          onClick={() => setTab("signup")}
        >
          Регистрация
        </button>
      </div>
      <div className={styles.divider} />
      <div className={styles.content}>
        {tab === "signin" ? <SignInForm /> : <SignUpForm />}
      </div>
    </AuthCard>
  );
}
