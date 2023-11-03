import { Stack, StackProps, SxProps, Rating } from "@mui/material";
import { styled } from "@mui/system";
import Righteous from "../Texts/Righteous";

const CustomStack = styled(Stack)({
    maxWidth: "180px",
});

interface ItemsProps extends StackProps {
    sx?: SxProps;
    imgURL?: string
    imgName?: string
    rating?: number
}

const Items: React.FC<ItemsProps>= ({ imgURL, imgName, rating, ...props }) => {
    return(
        <CustomStack className="item_box" direction="column" {...props}>
            <img className="items" src={imgURL} alt={imgName} width="170px" height="170px" />
            <Righteous sx={{ fontSize: "12px", mt: 2, mb: 1 }}>{imgName}</Righteous>
            <Rating size="small" value={rating} readOnly/>
        </CustomStack>
    )
}

export default Items;