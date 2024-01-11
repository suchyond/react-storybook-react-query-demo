import React, { useCallback } from "react";
import styled from "styled-components";
import { PlusIcon } from "@radix-ui/react-icons";
import { Form } from "./form";

export type HeaderProps = {
    children: React.ReactNode;
    handleAddItem: (data: string) => void;
};

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
 
    button {
        all: unset;
        border-radius: 50%;
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        background-color: ${(props) => props.theme.colors.grass9};
        color: #fff;
        width: 25px;
        height: 25px;
    }
`;

export const Header: React.FC<HeaderProps> = ({ handleAddItem, children }) => {
    const [isAddForm, setIsAddForm] = React.useState(false);

    const hideEditForm = useCallback(() => {
        setIsAddForm(false)
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
            <button onClick={() => setIsAddForm(true)}>
                <PlusIcon width={25} height={25}/>
            </button>
        )}

    </StyledDiv>);
};
