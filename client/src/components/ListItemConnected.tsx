import React, { useCallback, useReducer, useState } from "react";
import { ListItem } from "./ListItem";
import { CheckboxProps, CheckedState } from "@radix-ui/react-checkbox";
import { QueryKeys } from "../api/QueryKeys";
import { baseUrl } from "../api/url";
import {
    useDeleteMutation,
    useDoneMutation,
    useModifyMutation,
} from "../api/listItemMutations";
import { Form } from "./form";
import { useQueryClient } from "@tanstack/react-query";

export type ListItemProps = CheckboxProps & {
    label: string;
    itemId: number;
};

interface State {
    isEditing: boolean;
}

type Action = {type: "handleEdit" | "cancelEdit"};

const reducer = (state: State, action: Action) =>  {
    // ... Potentially there will be more actions, like reorder, change color
    // or something, thats why I used the reducer
    switch (action.type) {
        case "handleEdit": {
            return {...state, isEditing: true };
        }
        case "cancelEdit" : {
            return {...state, isEditing: false };
        };       
    }
    return state;
};

export const ListItemConnected: React.FC<ListItemProps> = (props) => {
    console.log("render ListItemConnected");
    const queryClient = useQueryClient();
    const [state, dispatch] = useReducer(reducer, {isEditing: false});

    const modifyMutation = useModifyMutation(baseUrl + "/items/" + props.itemId,
        () => queryClient.invalidateQueries({queryKey: [QueryKeys.LIST_ITEMS]}));
    const deleteMutation = useDeleteMutation(baseUrl + "/items/" + props.itemId,
        () => queryClient.invalidateQueries({queryKey: [QueryKeys.LIST_ITEMS]}));
    const doneMutation = useDoneMutation(baseUrl + "/items/done/" + props.itemId,
        () => queryClient.invalidateQueries({queryKey: [QueryKeys.LIST_ITEMS]}));

    // modifyMutation.mutate({})
    const editBtnClick = useCallback(() => {
        dispatch({type: "handleEdit"});
    }, [/* No need to add dispatch it is referentially stable between renders */]);

    /*const handleRemoval = useCallback(() => {
        deleteMutation.mutate();
    }, [deleteMutation.mutate]);*/

    const hideEditForm = useCallback(() => {
        dispatch({type: "cancelEdit"});
    }, []);
    const submitEdit = useCallback((title: string) => {
        modifyMutation.mutate({title});
    }, [modifyMutation.mutate]);
    const checkboxClick = useCallback((checked: CheckedState) => {
        // "indeterminate" will be considered as "checked". It should not be
        // a problem as there are currently no nested checkboxes, that would 
        // require "indeterminate" state
        doneMutation.mutate({done: !!checked});
    }, [doneMutation.mutate]);

    if (state.isEditing) {
        return (<Form
            handleSubmit={submitEdit}
            handleCancel={hideEditForm}
            initialValue={props.label || ''}
        />);
    }

    return (
        <ListItem
            label={props.label}
            handleEdit={editBtnClick}
            handleRemoval={deleteMutation.mutate}
            checked={props.checked}
            onCheckedChange={checkboxClick}
        />
    );
};