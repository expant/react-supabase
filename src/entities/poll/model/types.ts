export type PollOption = {
	id: number;
	text: string;
	position: number;
};

// TODO: Сделать через supabase Database тип
export type PollRow = {
	id: number;
	question: string;
	is_anonymous: boolean;
	created_at: string;
	author_id: string;
};

export type Poll = PollRow & {
	poll_options: PollOption[];
};

export type PollCardProps = {
	poll: Poll;
	value: number | null;
	disabled?: boolean;
	isLoading: boolean;
	onChange: (optionId: number) => void;
	onCancel: () => void;
};

export type OnPollInserted = (pollRow: PollRow) => void;
