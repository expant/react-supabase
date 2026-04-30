import { useSignUpForm } from "../model/hooks/useSignUpForm";
import { EyeIcon } from "@/shared/ui/icons/EyeIcon";
import styles from "./SignUpForm.module.css";

export function SignUpForm() {
  const {
    email, setEmail,
    username, setUsername,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    showPassword, togglePassword,
    showConfirm, toggleConfirm,
    errors, loading, handleSubmit,
  } = useSignUpForm();

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
        <label className={styles.label}>Имя пользователя</label>
        <div className={styles.inputWrap}>
          <input
            className={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            autoComplete="username"
          />
        </div>
        {errors.username && <span className={styles.errorMsg}>{errors.username}</span>}
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
            autoComplete="new-password"
          />
          <button type="button" className={styles.eyeBtn} onClick={togglePassword} tabIndex={-1}>
            <EyeIcon visible={showPassword} />
          </button>
        </div>
        {errors.password && <span className={styles.errorMsg}>{errors.password}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Подтвердите пароль</label>
        <div className={styles.inputWrap}>
          <input
            className={`${styles.input} ${styles.inputWithEye}`}
            type={showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="new-password"
          />
          <button type="button" className={styles.eyeBtn} onClick={toggleConfirm} tabIndex={-1}>
            <EyeIcon visible={showConfirm} />
          </button>
        </div>
        {errors.confirmPassword && (
          <span className={styles.errorMsg}>{errors.confirmPassword}</span>
        )}
      </div>

      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? "Регистрация..." : "Зарегистрироваться"}
      </button>
    </form>
  );
}
