import { Typography} from "antd";
import type { UserPollCardProps } from "../model/types";

const { Text } = Typography;

export function UserPollCard({ poll }: UserPollCardProps) {
  return (
    <div>
      <Text>{poll.question}</Text>
    </div>
  );
}