import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Pencil1Icon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";


const meta = {
    title: "Button",
    component: Button,
    argTypes: {
        onClick: { action: "clicked" },
        icon: { control: "@radix-ui/react-icons icons" },
    },
} as Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

export const AddButton: Story = {
    args: {
        icon: PlusIcon,
        onClick: () => {},
        isBigButton: true
    },
};

export const EditButton: Story = {
    args: {
        icon: Pencil1Icon,
        onClick: () => {},
    },
};

export const DeleteButton: Story = {
    args: {
        icon: TrashIcon,
        onClick: () => {},
    },
};
