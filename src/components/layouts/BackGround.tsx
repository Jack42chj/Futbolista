import { ReactNode } from "react";
import styled from "@emotion/styled";
import { Stack, StackProps, SxProps } from "@mui/material";

const CustomStack = styled(Stack)({
    height: "100%",
    width: "100%",
    minHeight: "100vh",
});

interface BackgroundProps extends StackProps {
    children: ReactNode;
    sx?: SxProps;
}

const BackGround: React.FC<BackgroundProps> = ({ children, ...props }) => {
    return (
        <CustomStack {...props}>
            {children}
        </CustomStack>
    );
};

export default BackGround;