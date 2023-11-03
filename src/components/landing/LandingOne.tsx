import BackgroundImage from "../../assets/images/main.png";
import Pretendard from "../Texts/Pretendard";
import BackGround from "../layouts/BackGround";
import Column from "../layouts/Column";
import { Button } from "@mui/material";

const LandingOne = () => {
    return(
        <BackGround sx={{ background: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: "center center" }}>
            <Column sx={{ mt: 35 }}>
                <Pretendard className="main_text" sx={{ my: 2 }}>내가 찾던 축구화</Pretendard>
                <Pretendard className="main_text">풋볼리스타에서</Pretendard>
                <Pretendard className="main_text" sx={{ mt: 2 }}>쉽고 간편하게</Pretendard>
            </Column>
            <Column>
                <Button href="/signin" className="main_button" sx={{ bottom: 130 }}>
                    <Pretendard sx={{ color: "#000000", fontWeight: "bold" }}>지금 시작하기</Pretendard>
                </Button>
            </Column>
        </BackGround>
    )
}

export default LandingOne;