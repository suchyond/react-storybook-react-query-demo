import React from "react";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { ListClasses } from "./List";
import { Button } from "./Button";

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
            <Button
                icon={Pencil1Icon}
                onClick={handleEdit}
            />
            <Button
                icon={TrashIcon}
                onClick={handleRemoval}
            />
        </div>
    </div>
);
