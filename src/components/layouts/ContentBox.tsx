import { ReactNode } from "react";
import styled from "@emotion/styled";
import { Stack, StackProps, SxProps } from "@mui/material";

const CustomStack = styled(Stack)({
    justifyContent: "center",
    width: "350px",
    margin: "0 auto",
});

interface ContentBoxProps extends StackProps {
    children: ReactNode;
    sx?: SxProps;
}

const ContentBox: React.FC<ContentBoxProps> = ({ children, ...props }) => {
    return (
        <CustomStack {...props}>
            {children}
        </CustomStack>
    );
};

export default ContentBox;