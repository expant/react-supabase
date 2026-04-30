import styles from "./ServiceUnavailablePage.module.css";

export function ServiceUnavailablePage() {
  const handleRetry = () => window.location.reload();

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.iconWrap}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={styles.icon}
          >
            <path
              d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 8v4M12 16h.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h1 className={styles.title}>Сервис недоступен</h1>
        <p className={styles.description}>
          Не удалось подключиться к серверу. Проверьте интернет-соединение и
          попробуйте снова.
        </p>
        <button className={styles.retryBtn} onClick={handleRetry}>
          Попробовать снова
        </button>
      </div>
    </div>
  );
}
