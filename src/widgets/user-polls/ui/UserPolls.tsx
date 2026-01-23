import { Typography } from "antd";
import { PollList } from "@/widgets/poll-list/ui/PollList";

const { Title } = Typography;

export function UserPolls () {
  return (
    <div>
      <Title level={3}>Мои опросы</Title>
    </div>
  );
}