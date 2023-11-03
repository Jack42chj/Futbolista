import Pretendard from "../Texts/Pretendard";
import BackGround from "../layouts/BackGround";
import Column from "../layouts/Column";
import Row from "../layouts/Row";
import Brand from "../../assets/images/brand.png";
import { Button } from "@mui/material";

const LandingThree = () => {
    return(
        <BackGround sx={{ bgcolor: "#F9F9F9", justifyContent: "center" }}>
            <Column sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Pretendard sx={{ fontSize: "24px"}}>지금 바로 다양한 브랜드의</Pretendard>
                <Pretendard sx={{ fontSize: "24px"}}>축구화를 만나보세요.</Pretendard>
                <Column my={4}>
                    <Pretendard sx={{ fontSize: "18px"}}>나이키, 아디다스, 푸마 등 </Pretendard>
                    <Pretendard sx={{ fontSize: "18px"}}>다양한 브랜드의 축구화가 있어요.</Pretendard>
                    <Pretendard sx={{ fontSize: "18px"}}>원하는 디자인의 축구화를 찾아</Pretendard>
                    <Pretendard sx={{ fontSize: "18px"}}>구매 전 내 발에 맞는지 확인해보세요.</Pretendard>
                </Column>
                <img src={Brand} alt="brand_img" />
                <Button href="/main" sx={{ borderRadius: 2, bgcolor: "#494949", width: "55%", py: 2, mt: 8, border: "3px solid #D0D0D0" }}>
                    <Pretendard sx={{ color: "#FCFCFC", fontWeight: "bold" }}>지금 만나보기</Pretendard>
                </Button>
            </Column>
            <Column sx={{ display: { xs: 'none', md: 'flex' }, width: "85%", m: "0 auto", maxWidth: "1048px" }}>
                <Row justifyContent="space-between" sx={{ width: "100%"}}>
                    <img className="brand" src={Brand} alt="brand_img" style={{ maxWidth: "50%", height: "auto" }}/>
                    <Column>
                        <Pretendard className="sub_text">지금 바로 다양한 브랜드의</Pretendard>
                        <Pretendard className="sub_text">축구화를 만나보세요.</Pretendard>
                        <Column mt={5}>
                            <Pretendard className="min_text">나이키, 아디다스, 푸마 등 </Pretendard>
                            <Pretendard className="min_text">다양한 브랜드의 축구화가 있어요.</Pretendard>
                            <Pretendard className="min_text">원하는 디자인의 축구화를 찾아</Pretendard>
                            <Pretendard className="min_text">구매하기 전에 내 발에 맞는지 확인해보세요.</Pretendard>
                        </Column>
                        <Button href="/main" sx={{ borderRadius: 2, bgcolor: "#494949", width: "90%", py: 2, mt: 5, border: "3px solid #D0D0D0" }}>
                            <Pretendard sx={{ color: "#FCFCFC", fontWeight: "bold" }}>지금 만나보기</Pretendard>
                        </Button>
                    </Column>
                </Row>
            </Column>
        </BackGround>
    )
}

export default LandingThree;