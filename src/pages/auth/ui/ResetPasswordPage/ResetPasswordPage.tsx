import { Link } from "react-router";
import { AuthCard } from "@/shared/ui/auth-card/AuthCard";
import { ResetPasswordForm } from "@/features/auth/reset-password/ui/ResetPasswordForm";
import styles from "./ResetPasswordPage.module.css";

export function ResetPasswordPage() {
  return (
    <AuthCard>
      <div className={styles.header}>
        <h2 className={styles.title}>Сброс пароля</h2>
        <p className={styles.subtitle}>
          Введите email — мы отправим ссылку для восстановления доступа
        </p>
      </div>
      <ResetPasswordForm />
      <div className={styles.backLink}>
        <Link to="/auth">← Вернуться ко входу</Link>
      </div>
    </AuthCard>
  );
}
