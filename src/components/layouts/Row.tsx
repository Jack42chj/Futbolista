import { styled } from "@mui/system";
import { Stack, StackProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

const CustomStack = styled(Stack)(({theme}) => ({
    alignItems: "center",
}));

interface RowProps extends StackProps {
    children: ReactNode;
    sx?: SxProps;
}

const Row: React.FC<RowProps>= ({ children, ...props }) => {
    return(
        <CustomStack direction="row" {...props}>
            {children}
        </CustomStack>
    );
};

export default Row;