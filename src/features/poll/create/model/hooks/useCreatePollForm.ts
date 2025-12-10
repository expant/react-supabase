import { useState } from 'react';
import { Form } from 'antd';

export function useCreatePollForm() {
	const [form] = Form.useForm();
	const [options, setOptions] = useState<string[]>(['', '']);

	const addOption = () => setOptions([...options, '']);

	const removeOption = (idx: number) =>
		setOptions(options.filter((_, i) => i !== idx));

	const handleOptionChange = (idx: number, value: string) => {
		const newOptions = [...options];
		newOptions[idx] = value;
		setOptions(newOptions);
	};

	const canRemoveOption = (optionsLength: number, index: number) =>
		optionsLength > 2 && index > 1;

	const onFinish = () => {
		console.log(options);
	};

	return {
		form,
		options,
		onFinish,
		setOptions,
		addOption,
		removeOption,
		handleOptionChange,
		canRemoveOption,
	};
}
