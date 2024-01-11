import { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "../ListItem";
import { ListItemStyles } from "../List";
import React from "react";

const ListItemStyleDecorator = (ListItem: React.FunctionComponent) => 
    <ListItemStyles>
        <ListItem />
    </ListItemStyles>;

const meta = {
    title: "List Item",
    component: ListItem,
    decorators: [ListItemStyleDecorator],
    argTypes: {
        handleRemoval: { action: "removed" },
        handleEdit: { action: "edited" },
    },
} as Meta<typeof ListItem>;
export default meta;
type Story = StoryObj<typeof ListItem>;
export const ToDo: Story = {
    args: {
        label: "Lorem ipsum dolor",
    },
};
export const Done: Story = {
    args: {
        ...ToDo.args,
        checked: true,
    },
};
