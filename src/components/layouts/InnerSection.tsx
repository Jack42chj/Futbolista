import { ReactNode } from "react";
import styled from "@emotion/styled";
import { Stack, StackProps, SxProps } from "@mui/material";

const CustomStack = styled(Stack)({
    height: "100%",
    width: "100%",
    minHeight: "224px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(51, 51, 51, 0.3)",
    ":hover": {
        backgroundColor: "transparent",
    },
});

interface BackgroundProps extends StackProps {
    children: ReactNode;
    sx?: SxProps;
}

const InnerSection: React.FC<BackgroundProps> = ({ children, ...props }) => {
    return (
        <CustomStack {...props}>
            {children}
        </CustomStack>
    );
};

export default InnerSection;