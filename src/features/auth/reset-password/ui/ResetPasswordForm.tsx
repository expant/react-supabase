import { useResetPasswordForm } from "../model/hooks/useResetPasswordForm";
import styles from "./ResetPasswordForm.module.css";

export function ResetPasswordForm() {
  const { email, setEmail, errors, loading, isSuccess, handleSubmit } =
    useResetPasswordForm();

  if (isSuccess) {
    return (
      <div className={styles.successMsg}>
        <p className={styles.successText}>
          Если указанный вами email зарегистрирован, мы отправили на него письмо
          со ссылкой для сброса пароля.
        </p>
        <p className={styles.successText}>Проверьте вашу почту.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label}>Email для сброса пароля</label>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
        />
        {errors.email && (
          <span className={styles.errorMsg}>{errors.email}</span>
        )}
      </div>

      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? "Отправка..." : "Сбросить пароль"}
      </button>
    </form>
  );
}
