import { Skeleton } from "antd";

export function UserPanelSkeleton() {
  return (
    <>
      <Skeleton.Input size="small" active />
      <Skeleton.Avatar active size="default" />
    </>
  );
}
