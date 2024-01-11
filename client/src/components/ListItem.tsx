import React from "react";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { ListClasses } from "./List";

export type ListItemProps = CheckboxProps & {
    label: string;
    handleEdit: () => void;
    handleRemoval: () => void;
};

export const ListItem: React.FC<ListItemProps> = ({ label, handleRemoval, handleEdit, ...checkboxProps }) => (
    <div className={ListClasses.LIST_ITEM}>
        <Checkbox {...checkboxProps} />
        <label className={ListClasses.LABEL}>{label}</label>
        <div className={ListClasses.ACTION_BUTTONS}>
            <button onClick={() => handleEdit()}>
                <Pencil1Icon />
            </button>
            <button onClick={() => handleRemoval()}>
                <TrashIcon />
            </button>
        </div>

    </div>
);
