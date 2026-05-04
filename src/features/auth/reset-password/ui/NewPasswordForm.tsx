import { useNewPasswordForm } from "../model/hooks/useNewPasswordForm";
import { EyeIcon } from "@/shared/ui/icons/EyeIcon";
import styles from "./NewPasswordForm.module.css";

export function NewPasswordForm() {
  const {
    errors,
    loading,
    password,
    setPassword,
    setConfirmPassword,
    showConfirm,
    showPassword,
    togglePassword,
    toggleConfirm,
    confirmPassword,
    handleSubmit,
  } = useNewPasswordForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label}>Новый пароль</label>
        <div className={styles.inputWrap}>
          <input
            className={`${styles.input} ${styles.inputWithEye}`}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="new-password"
          />
          <button
            type="button"
            className={styles.eyeBtn}
            onClick={togglePassword}
            tabIndex={-1}
          >
            <EyeIcon visible={showPassword} />
          </button>
        </div>
        {errors.password && (
          <span className={styles.errorMsg}>{errors.password}</span>
        )}
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
          <button
            type="button"
            className={styles.eyeBtn}
            onClick={toggleConfirm}
            tabIndex={-1}
          >
            <EyeIcon visible={showConfirm} />
          </button>
        </div>
        {errors.confirmPassword && (
          <span className={styles.errorMsg}>{errors.confirmPassword}</span>
        )}
      </div>

      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? "Сохранение..." : "Сохранить"}
      </button>
    </form>
  );
}
