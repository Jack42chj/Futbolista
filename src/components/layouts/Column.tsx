import { styled } from "@mui/system";
import { Stack, StackProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

const CustomStack = styled(Stack)({
    alignItems: "center"
});

interface ColumnProps extends StackProps {
    children: ReactNode;
    sx?: SxProps;
}

const Column: React.FC<ColumnProps>= ({ children, ...props }) => {
    return(
        <CustomStack direction="column" {...props}>
            {children}
        </CustomStack>
    );
};

export default Column;