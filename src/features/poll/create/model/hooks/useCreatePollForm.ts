import { useState } from "react";
import { message } from "antd";
import { createPoll } from "../../api/createPoll";

export function useCreatePollForm() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid =
    question.trim().length > 0 && options.every((o) => o.trim() !== "");

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

    try {
      await createPoll(question, options);
    } catch (e) {
      message.error(e instanceof Error ? e.message : "Ошибка создания опроса");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    question,
    setQuestion,
    options,
    isLoading,
    isFormValid,
    submit,
    setOptions,
    addOption,
    removeOption,
    handleOptionChange,
    canRemoveOption,
  };
}
