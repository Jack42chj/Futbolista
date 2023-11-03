import Pretendard from "../Texts/Pretendard";
import Righteous from "../Texts/Righteous";
import BackGround from "../layouts/BackGround";
import Row from "../layouts/Row";
import Column from "../layouts/Column";
import TestOne from "../../assets/images/test1.png";
import TestTwo from "../../assets/images/test2.png";
import { Stack } from "@mui/material";

const LandingTwo = () => {
    return(
        <BackGround sx={{ bgcolor: "#F9F9F9", justifyContent: "center" }}>
            <Column sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Pretendard className="font24">
                    사이즈 걱정없는 축구화 선택,
                </Pretendard>
                <Row>
                    <Righteous sx={{ fontSize: "24px", color: "#494949"}}>Futbolista</Righteous>
                    <Pretendard className="font24">와 함께하세요.</Pretendard>
                </Row>
                <Stack alignItems="flex-start" sx={{ width: "320px"}}>
                    <a href="/mesure">
                        <Pretendard className="font24" sx={{ borderBottom: "1px solid", mt: 4, fontWeight: "bold" }}>나에게 맞는</Pretendard>
                        <Pretendard className="font24" sx={{ borderBottom: "1px solid", mb: 4, fontWeight: "bold" }}>축구화 찾아보기</Pretendard>
                    </a>
                </Stack>
                <Row justifyContent="space-between">
                    <img className="test1" src={TestOne} alt="test1" style={{ maxWidth: "190px", height: "auto" }} />
                    <img className="test2" src={TestTwo} alt="test2" style={{ maxWidth: "190px", height: "auto" }} />
                </Row>
                <Stack alignItems="flex-start" sx={{ width: "320px", mt: 5 }}>
                    <Pretendard>발 정보를 입력해보세요.</Pretendard>
                    <Pretendard>구장별 축구화 추천은 기본,</Pretendard>
                    <Pretendard>다양한 브랜드 축구화를 추천받을 수 있어요.</Pretendard>
                </Stack>
            </Column>
            <Column sx={{ display: { xs: 'none', md: 'flex' }, width: "85%", m: "0 auto", maxWidth: "1048px" }}>
                <Row justifyContent="space-between" sx={{ width: "100%"}}>
                    <Row>
                        <img className="test1" src={TestOne} alt="test1" style={{ maxWidth: "190px", height: "auto" }} />
                        <img className="test2" src={TestTwo} alt="test2" style={{ maxWidth: "190px", height: "auto" }} />
                    </Row>
                    <Column>
                        <Pretendard className="sub_text">
                            사이즈 걱정없는 축구화 선택,
                        </Pretendard>
                        <Row>
                            <Righteous sx={{ fontSize: "24px", color: "#494949"}}>Futbolista</Righteous>
                            <Pretendard className="sub_text">와 함께하세요.</Pretendard>
                        </Row>
                        <a href="/mesure">
                            <Pretendard className="link_text" sx={{ borderBottom: "1px solid", mt: 4, fontWeight: "bold" }}>나에게 맞는 축구화 찾아보기</Pretendard>
                        </a>
                        <Column sx={{ mt: 8 }}>
                            <Pretendard className="min_text">발 정보를 입력해보세요.</Pretendard>
                            <Pretendard className="min_text">구장별 축구화 추천은 기본,</Pretendard>
                            <Pretendard className="min_text">다양한 브랜드 축구화를 추천받을 수 있어요.</Pretendard>
                        </Column>
                    </Column>
                </Row>
            </Column>
        </BackGround>
    )
}

export default LandingTwo;