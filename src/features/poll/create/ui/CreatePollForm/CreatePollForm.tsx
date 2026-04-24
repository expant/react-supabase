import { useCreatePollForm } from "../../model/hooks/useCreatePollForm";
import { BarChartIcon } from "@/shared/ui/icons/BarChartIcon";
import { CloseIcon } from "@/shared/ui/icons/CloseIcon";
import { PlusIcon } from "@/shared/ui/icons/PlusIcon";
import { TrashIcon } from "@/shared/ui/icons/TrashIcon";
import type { FormEvent } from "react";
import type { CreatePollFormProps } from "../../model/types";
import styles from "./CreatePollForm.module.css";

export function CreatePollForm({
  onCloseModal,
  onCreated,
}: CreatePollFormProps) {
  const {
    submit,
    options,
    question,
    setQuestion,
    isLoading,
    isFormValid,
    addOption,
    handleOptionChange,
    removeOption,
    canRemoveOption,
  } = useCreatePollForm();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submit();
    onCreated();
    onCloseModal();
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* ── Header ── */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleIcon}>
            <BarChartIcon />
          </span>
          Новый опрос
        </h2>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onCloseModal}
          aria-label="Закрыть"
        >
          <CloseIcon />
        </button>
      </div>

      {/* ── Question ── */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="poll-question">
          Вопрос
        </label>
        <input
          id="poll-question"
          name="question"
          className={styles.questionInput}
          placeholder="Что хочешь узнать?"
          required
          autoFocus
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      {/* ── Options ── */}
      <div className={styles.field}>
        <label className={styles.label}>Варианты ответа</label>

        <div className={styles.optionsList}>
          {options.map((option, idx) => (
            <div key={idx} className={styles.optionRow}>
              <div className={styles.optionNum} aria-hidden="true">
                {idx + 1}
              </div>

              <input
                className={styles.optionInput}
                placeholder={`Вариант ${idx + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(idx, e.target.value)}
                required
                aria-label={`Вариант ${idx + 1}`}
              />

              <button
                type="button"
                className={styles.deleteBtn}
                onClick={() => removeOption(idx)}
                disabled={!canRemoveOption(options.length, idx)}
                aria-label={`Удалить вариант ${idx + 1}`}
              >
                <TrashIcon />
              </button>
            </div>
          ))}
        </div>

        {options.length < 10 && (
          <button type="button" className={styles.addBtn} onClick={addOption}>
            <PlusIcon />
            Добавить вариант
          </button>
        )}
      </div>

      {/* ── Submit ── */}
      <button
        type="submit"
        className={styles.submitBtn}
        disabled={isLoading || !isFormValid}
      >
        {isLoading && <span className={styles.spinner} aria-hidden="true" />}
        {isLoading ? "Создаём..." : "Создать опрос"}
      </button>
    </form>
  );
}
