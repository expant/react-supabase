import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { SignInForm } from '../../../features/auth/sign-in/ui/SignInForm';
import { SignUpForm } from '../../../features/auth/sign-up/ui/SignUpForm';

const authTabs: TabsProps['items'] = [
	{ key: '1', label: 'Sign In', children: <SignInForm /> },
	{ key: '2', label: 'Sign Up', children: <SignUpForm /> },
];

export function AuthPage() {
	return <Tabs defaultActiveKey='login' items={authTabs} />;
}
