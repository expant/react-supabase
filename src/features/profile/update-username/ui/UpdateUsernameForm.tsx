import { useUpdateUsername } from "../model/hooks/useUpdateUsername";
import type { UpdateUsernameFormProps } from "../model/types";
import styles from "./UpdateUsernameForm.module.css";

export function UpdateUsernameForm({
  profile,
  setUsername,
}: UpdateUsernameFormProps) {
  const { value, setValue, isLoading, handleSubmit } = useUpdateUsername({
    profile,
    setUsername,
  });

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <label className={styles.label} htmlFor="username">
        Имя пользователя
      </label>
      <div className={styles.row}>
        <input
          id="username"
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={profile?.username}
          disabled={isLoading}
          autoComplete="off"
        />
        <button
          type="submit"
          className={styles.saveBtn}
          disabled={isLoading || !value.trim()}
        >
          {isLoading && <span className={styles.spinner} aria-hidden="true" />}
          Сохранить
        </button>
      </div>
    </form>
  );
}
