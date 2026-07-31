import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select, SelectItem } from './Select.js';

function LanguageDemo() {
	return (
		<div className="w-64">
			<Select defaultSelectedKey="en-US" label="Language">
				<SelectItem id="en-US">English</SelectItem>
				<SelectItem id="ro-RO">Română</SelectItem>
				<SelectItem id="de-DE">Deutsch</SelectItem>
				<SelectItem id="ja-JP">日本語</SelectItem>
			</Select>
		</div>
	);
}

const meta = {
	title: 'Components/Select',
	component: LanguageDemo,
} satisfies Meta<typeof LanguageDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Language: Story = {};
