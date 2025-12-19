import { Form, Button, Input } from "antd";
import { useUpdateUsername } from "../model/hooks/useUpdateUsername";
import type {
  UpdateUsernameFormValues,
  UpdateUsernameFormProps,
} from "../model/types";
import styles from "./UpdateUsernameForm.module.css";

export function UpdateUsernameForm({
  profile,
  setUsername,
}: UpdateUsernameFormProps) {
  const { form, isLoading, handleSubmit } = useUpdateUsername({
    profile,
    setUsername,
  });

  return (
    <Form<UpdateUsernameFormValues>
      form={form}
      onFinish={handleSubmit}
      className={styles.form}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Пожалуйста, введите username!" }]}
      >
        <Input placeholder={profile?.username} disabled={isLoading} />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={isLoading}>
        Изменить
      </Button>
    </Form>
  );
}
