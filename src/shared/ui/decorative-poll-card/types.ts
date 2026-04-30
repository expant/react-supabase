export type DecorativePollOption = {
  label: string;
  percent: number;
  highlighted?: boolean;
};

export type DecorativePollCardProps = {
  title: string;
  options: DecorativePollOption[];
};
