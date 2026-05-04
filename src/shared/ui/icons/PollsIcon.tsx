type Props = {
  size?: number;
};

export function PollsIcon({ size = 15 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none">
      <rect x="1" y="9" width="3" height="5" rx="1" fill="currentColor" />
      <rect x="6" y="5" width="3" height="9" rx="1" fill="currentColor" />
      <rect x="11" y="1" width="3" height="13" rx="1" fill="currentColor" />
    </svg>
  );
}
