export type SignUpFormValues = {
	email: string;
	password: string;
	username: string;
};

export type SignUpFormErrors = Partial<SignUpFormValues & { confirmPassword: string }>;
