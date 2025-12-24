import { useState } from "react";
import { Form, message } from "antd";
import { createPoll } from "../../api/createPoll";

export function useCreatePollForm() {
  const [form] = Form.useForm();
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [isLoading, setIsLoading] = useState(false);

  const addOption = () => setOptions([...options, ""]);

  const removeOption = (idx: number) =>
    setOptions(options.filter((_, i) => i !== idx));

  const handleOptionChange = (idx: number, value: string) => {
    const newOptions = [...options];
    newOptions[idx] = value;
    setOptions(newOptions);
  };

  const canRemoveOption = (optionsLength: number, index: number) =>
    optionsLength > 2 && index > 1;

  const submit = async () => {
    setIsLoading(true);
    const question = form.getFieldValue("question");

    try {
      await createPoll(question, options);
    } catch (e) {
      message.error(e instanceof Error ? e.message : "Ошибка создания опроса");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    options,
    isLoading,
    submit,
    setOptions,
    addOption,
    removeOption,
    handleOptionChange,
    canRemoveOption,
  };
}
