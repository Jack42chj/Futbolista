import styled from "@emotion/styled"
import { Button, ButtonProps, SxProps } from "@mui/material"
import { ReactNode } from "react"

const CustomButton = styled(Button)({
    textTransform: "none",
    width: "100%",
    height: "48px",
    color: "#FFFFFF",
    boxShadow: "0",
    borderRadius: "8px",
    "&:hover": {
        backgroundColor: "#D4D4D4",
    },
})

interface SubmitButtonProps extends ButtonProps {
    children: ReactNode;
    sx?: SxProps;
}

const AuthBtn: React.FC<SubmitButtonProps> = ({ children, ...props }) => {
    return(
        <CustomButton {...props}>
            {children}
        </CustomButton>
    )
}

export default AuthBtn;