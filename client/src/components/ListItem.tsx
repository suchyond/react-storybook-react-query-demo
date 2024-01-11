import React from "react";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { ListClasses } from "./List";
import { Button } from "./Button";
import { getUseInjectedClassNames } from "../hooks/getUseInjectedClassNames";

export type ListItemProps = CheckboxProps & {
    label: string;
    handleEdit: () => void;
    handleRemoval: () => void;
    /**
     * Only for Storybook
     */
    injectClassNames?: string[];
};

const useInjectedClassNames = getUseInjectedClassNames(ListClasses.LIST_ITEM);

export const ListItem: React.FC<ListItemProps> = ({
    label, handleRemoval, handleEdit, injectClassNames, ...checkboxProps
}) => {
    const className = useInjectedClassNames(injectClassNames);

    return(
        <div className={className}>
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
};
