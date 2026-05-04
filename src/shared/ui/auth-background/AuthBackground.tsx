import { DecorativePollCard } from "@/shared/ui/decorative-poll-card/DecorativePollCard";
import { authBackgroundPolls } from "./data";
import { useMouseRepel } from "./useMouseRepel";
import styles from "./AuthBackground.module.css";

const cardClasses = [styles.card1, styles.card2, styles.card3, styles.card4];

export function AuthBackground() {
  const repelRefs = useMouseRepel(authBackgroundPolls.length);

  return (
    <div className={styles.background}>
      {authBackgroundPolls.map((poll, index) => (
        <div
          key={poll.title}
          className={`${styles.cardWrap} ${cardClasses[index]}`}
        >
          <div
            ref={(el) => {
              repelRefs.current[index] = el;
            }}
            className={styles.cardRepel}
          >
            <DecorativePollCard title={poll.title} options={poll.options} />
          </div>
        </div>
      ))}
    </div>
  );
}
