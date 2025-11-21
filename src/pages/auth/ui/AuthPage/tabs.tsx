import type { TabsProps } from 'antd';
import { SignInForm } from '@/features/auth/sign-in/ui/SignInForm';
import { SignUpForm } from '@/features/auth/sign-up/ui/SignUpForm';

export const authTabs: TabsProps['items'] = [
	{ key: '1', label: 'Вход', children: <SignInForm /> },
	{ key: '2', label: 'Регистрация', children: <SignUpForm /> },
];
