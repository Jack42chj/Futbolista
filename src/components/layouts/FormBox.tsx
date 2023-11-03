import { styled } from "@mui/system";
import { Stack, StackProps } from "@mui/material";
import { ReactNode } from "react";

const CustomStack = styled(Stack)(({theme}) => ({
  justifyContent: "center",
  width: "314px",
  margin: "0 auto",
  marginTop: 100,
}));

interface FormBoxProps extends StackProps {
    children: ReactNode;
}

const FormBox: React.FC<FormBoxProps> = (props) => <CustomStack>{props.children}</CustomStack>;

export default FormBox;