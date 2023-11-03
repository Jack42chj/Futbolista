import { styled } from "@mui/system";
import { Typography, TypographyProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

const CustomText = styled(Typography)(({theme}) => ({
    fontFamily: "Righteous-Regular",
    fontSize: "18px",
    textTransform: "none",
}));

interface LogoTextProps extends TypographyProps {
    children: ReactNode;
    sx?: SxProps;
}

const Righteous: React.FC<LogoTextProps> = ({ children, ...props }) => {
    return(
        <CustomText {...props}>
            {children}
        </CustomText>
    );
};

export default Righteous;