import styled from "@emotion/styled";
import { InputBase, InputBaseProps, SxProps } from "@mui/material";

const CustomInputBase = styled(InputBase)({
    backgroundColor: "#F4F4F4",
    fontFamily: 'Righteous-Regular',
    width: "100%",
    height: "48px",
    borderRadius: 8,
    paddingLeft: 16,
    margin: "8px 0",
    'input': {
        '&::placeholder': {
          fontFamily: 'Righteous-Regular',
        }
    }
})

interface InputbaseProps extends InputBaseProps {
    sx? : SxProps;
}

const Inputbase: React.FC<InputbaseProps> = ({ ...props }) => {
    return(
        <CustomInputBase {...props} />
    )
}

export default Inputbase;