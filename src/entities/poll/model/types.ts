export type PollOption = {
	id: number;
	text: string;
	position: number;
};

export type Poll = {
	id: number;
	question: string;
	is_anonymous: boolean;
	created_at: string;
	author_id: string;
	poll_options: PollOption[];
};

export type PollCardProps = {
	poll: Poll;
};
