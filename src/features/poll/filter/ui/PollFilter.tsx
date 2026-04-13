import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { PollFilterProps } from "../model/types";

export function PollFilter({ onFilterChange }: PollFilterProps) {
  return (
    <Input
      placeholder="Поиск по названию опроса"
      prefix={<SearchOutlined />}
      allowClear
      onChange={(e) => onFilterChange(e.target.value)}
      size="large"
    />
  );
}
