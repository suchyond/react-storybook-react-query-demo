import { IconProps } from "@radix-ui/react-icons/dist/types"
import styled from "styled-components";

interface ButtonProps {
    children?: React.ReactNode
    /**
     * Designed for: radix-ui/react-icons
     */
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
    onClick: () => void;
    /**
     * Can be overridden with width and height props    
     */
    size?: number;
    width?: number;
    height?: number;
    isBigButton?: boolean;
}

const NormalStyledButton = styled.button`
    all: unset;
    border-radius: 50%;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.olive9};
    background-color: ${(props) => props.theme.colors.grass9};
    color: #fff;
    cursor: pointer;
    width: 22px;
    height: 22px;
`;

const BigStyledButton = styled(NormalStyledButton)`
    width: 25px;
    height: 25px;
`;

export const Button: React.FC<ButtonProps> = (props) => {
    const Icon = props.icon;


    let width = 21;
    let height = 21;

    let StyledButton = NormalStyledButton;
    if (props.isBigButton) {
        StyledButton = BigStyledButton;
        width = 25;
        height = 25;
    }
    

    if (props.size) {
        width = props.size;
        height = props.size;
    } else {
        width = props.width ?? width;
        height = props.height ?? height;
    }

    return (
        <StyledButton onClick={props.onClick}>
            <Icon width={width} height={height}/>
        </StyledButton>
    )
}
