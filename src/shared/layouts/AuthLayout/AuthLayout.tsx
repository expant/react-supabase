import { Outlet } from "react-router";
import { AuthBackground } from "@/shared/ui/auth-background/AuthBackground";
import styles from "./AuthLayout.module.css";

export function AuthLayout() {
  return (
    <div className={styles.layout}>
      <AuthBackground />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
