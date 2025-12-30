import { Form, Button, Input, Flex } from "antd";
import { useUpdateEmailForm } from "../model/hooks/useUpdateEmailForm";
import type {
  UpdateEmailFormValues,
  UpdateEmailFormProps,
} from "../model/types";
import styles from "./UpdateEmailForm.module.css";

export function UpdateEmailForm({ email }: UpdateEmailFormProps) {
  const { form, isLoading, handleSubmit } = useUpdateEmailForm();

  return (
    <Form<UpdateEmailFormValues>
      form={form}
      onFinish={handleSubmit}
      layout="vertical"
      className={styles.form}
    >
      <Form.Item
        label="Email"
        name="email"
        colon={false}
        className={styles.formItem}
      >
        <Flex gap="small" className={styles.inputContainer}>
          <Input placeholder={email} disabled={isLoading} />

          <Button type="primary" htmlType="submit" loading={isLoading}>
            Изменить
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
}
