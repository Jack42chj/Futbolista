import { ReactNode } from "react";
import styled from "@emotion/styled";
import { Stack, StackProps, SxProps } from "@mui/material";

const CustomStack = styled(Stack)({
    height: "100%",
    width: "100%",
    minHeight: "224px",
});

interface BackgroundProps extends StackProps {
    children: ReactNode;
    sx?: SxProps;
}

const Section: React.FC<BackgroundProps> = ({ children, ...props }) => {
    return (
        <CustomStack {...props}>
            {children}
        </CustomStack>
    );
};

export default Section;