import { Form, Button, Input, Flex } from "antd";
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
      layout="vertical"
      className={styles.form}
    >
      <Form.Item
        label="Имя пользователя"
        name="username"
        colon={false}
        className={styles.formItem}
      >
        <Flex gap="small" className={styles.inputContainer}>
          <Input placeholder={profile?.username} disabled={isLoading} />

          <Button type="primary" htmlType="submit" loading={isLoading}>
            Изменить
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
}
