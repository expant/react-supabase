import { AuthCard } from "@/shared/ui/auth-card/AuthCard";
import { NewPasswordForm } from "@/features/auth/reset-password/ui/NewPasswordForm";
import styles from "./NewPasswordPage.module.css";

export function NewPasswordPage() {
  return (
    <AuthCard>
      <div className={styles.header}>
        <h2 className={styles.title}>Новый пароль</h2>
        <p className={styles.subtitle}>Придумайте надёжный пароль для вашего аккаунта</p>
      </div>
      <NewPasswordForm />
    </AuthCard>
  );
}
