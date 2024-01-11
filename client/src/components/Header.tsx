import React, { useCallback } from "react";
import styled from "styled-components";
import { PlusIcon } from "@radix-ui/react-icons";
import { Form } from "./form";
import { Button } from "./Button";

export type HeaderProps = {
    children: React.ReactNode;
    handleAddItem: (data: string) => void;
};

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const Header: React.FC<HeaderProps> = ({ handleAddItem, children }) => {
    const [isAddForm, setIsAddForm] = React.useState(false);

    const hideEditForm = useCallback(() => {
        setIsAddForm(false)
    }, []);

    const showEditForm = useCallback(() => {
        setIsAddForm(true)
    }, []);

    return (<StyledDiv>
        <h1>{children}</h1>
        {isAddForm ? (
            <Form
                handleSubmit={handleAddItem}
                handleCancel={hideEditForm}
                initialValue={''}
            />
        ): (
            <Button
                icon={PlusIcon}
                onClick={showEditForm}
                isBigButton
            />
        )}

    </StyledDiv>);
};
