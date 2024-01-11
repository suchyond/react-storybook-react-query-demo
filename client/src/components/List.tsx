import React, { PropsWithChildren } from "react";
import styled from "styled-components";

// Using classes instead multiple styled components locally, can significantly
// speed up render times for e.g. lists whit repeating entries of same styles,
// in little advanced TODO list lets say we render 100
// todos and each toto has 10 styled components (for various parts and buttons),
// 100 * 10, we now have to render 1000 components instead of 100 that would be 
// rendered if local class names are used.
// TODO: Try to move styling to the out of the ListItem to the List
export enum ListClasses {
    // BEM class names block__element--modifier
    LIST_ITEM = 'list__list-item',
    ACTION_BUTTONS = 'list-item__action-buttons', 
    LABEL = 'list-item__label',
};

// Separate styles for Storybook, could be used if we want to style outside
// of the list, i.g. in some form or something.
export const ListItemStyles = styled.div`
    .${ListClasses.LIST_ITEM} {
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr auto;
    }

    .${ListClasses.LABEL} {
        margin-left: 15px;
    }

    .${ListClasses.ACTION_BUTTONS} {
        display: none;
    }

    .${ListClasses.LIST_ITEM}:hover {
        .${ListClasses.ACTION_BUTTONS} {
            display: block;
        }
    }
`;

const ListStyles = styled(ListItemStyles)`
    display: flex;
    flex-direction: column;
`;

export const List: React.FC<PropsWithChildren> = ({ children }) => {
    return (<ListStyles>{children}</ListStyles>);
};
