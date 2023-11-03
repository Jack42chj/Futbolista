import { styled } from "@mui/system";
import { Typography, TypographyProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

const CustomText = styled(Typography)(({theme}) => ({
    fontFamily: "Pretendard-Regular",
    fontSize: "18px",
    textTransform: "none",
    "&.font15": {
        fontSize: "14px",
        color: "#838383",
    },
    "&.font24": {
        fontSize: "24px",
    },
}));

interface LogoTextProps extends TypographyProps {
    children: ReactNode;
    sx?: SxProps;
}

const Pretendard: React.FC<LogoTextProps> = ({ children, ...props }) => {
    return(
        <CustomText {...props}>
            {children}
        </CustomText>
    );
};

export default Pretendard;