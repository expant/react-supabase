import type { DecorativePollCardProps } from "@/shared/ui/decorative-poll-card/types";

export const authBackgroundPolls: DecorativePollCardProps[] = [
  {
    title: "Какой стек предпочитаешь?",
    options: [
      { label: "React", percent: 64, highlighted: true },
      { label: "Vue", percent: 22 },
      { label: "Svelte", percent: 14 },
    ],
  },
  {
    title: "Tabs или Spaces?",
    options: [
      { label: "Tabs", percent: 40 },
      { label: "Spaces", percent: 60, highlighted: true },
    ],
  },
  {
    title: "Remote или офис?",
    options: [
      { label: "Удалёнка", percent: 58, highlighted: true },
      { label: "Офис", percent: 14 },
      { label: "Гибрид", percent: 28 },
    ],
  },
  {
    title: "Тёмная тема?",
    options: [
      { label: "Тёмная", percent: 87, highlighted: true },
      { label: "Светлая", percent: 13 },
    ],
  },
];
