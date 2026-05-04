import { Link } from "react-router";
import { useSignInForm } from "../model/hooks/useSignInForm";
import { EyeIcon } from "@/shared/ui/icons/EyeIcon";
import styles from "./SignInForm.module.css";

export function SignInForm() {
  const {
    email, setEmail,
    password, setPassword,
    showPassword, togglePassword,
    errors, loading, handleSubmit,
  } = useSignInForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <div className={styles.inputWrap}>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
        {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Пароль</label>
        <div className={styles.inputWrap}>
          <input
            className={`${styles.input} ${styles.inputWithEye}`}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
          />
          <button type="button" className={styles.eyeBtn} onClick={togglePassword} tabIndex={-1}>
            <EyeIcon visible={showPassword} />
          </button>
        </div>
        {errors.password && <span className={styles.errorMsg}>{errors.password}</span>}
      </div>

      <div className={styles.forgotLink}>
        <Link to="/auth/reset-password">Забыли пароль?</Link>
      </div>

      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? "Вход..." : "Войти"}
      </button>
    </form>
  );
}
