import Pretendard from "../Texts/Pretendard";
import BackGround from "../layouts/BackGround";
import Row from "../layouts/Row";
import Velog from "../../assets/logo/velog.png";
import Github from "../../assets/logo/github.png";
import { Stack } from "@mui/system";

const LandingFour = () => {
    return(
        <BackGround sx={{ bgcolor: "#F0F0F0" }}>
            <Stack sx={{ px: 5}}>
                <Stack mt={15} spacing={1} justifyContent="flex-start">
                    <Pretendard className="font15" sx={{ py: 1, fontWeight: "bold" }}>서비스</Pretendard>
                    <Pretendard className="font15">소개</Pretendard>
                    <Pretendard className="font15">브랜드 축구화 보기</Pretendard>
                    <Pretendard className="font15">축구화 추천 받기</Pretendard>
                    <Pretendard className="font15">공지사항</Pretendard>
                    <Pretendard className="font15">고객센터</Pretendard>
                </Stack>
                <Stack mt={5} spacing={1} justifyContent="flex-start">
                    <Pretendard className="font15" sx={{ py: 1, fontWeight: "bold" }}>이용약관</Pretendard>
                    <Pretendard className="font15">서비스 이용약관</Pretendard>
                    <Pretendard className="font15">개인정보 처리방침</Pretendard>
                    <Pretendard className="font15">이용자보호 비전과 계획</Pretendard>
                </Stack>
                <Stack mt={5} spacing={1} justifyContent="flex-start">
                    <Pretendard className="font15" sx={{ py: 1, fontWeight: "bold" }}>풋볼리스타</Pretendard>
                    <Pretendard className="font15">최호진</Pretendard>
                    <Pretendard className="font15">서울 노원구 석계로13길 23-10 광운대학교 새빛관</Pretendard>
                    <Pretendard className="font15">이메일 hojinch99@kw.ac.kr</Pretendard>
                    <Pretendard className="font15">전화번호 010-5064-8771</Pretendard>
                </Stack>
                <Row mt={5} spacing={1}>
                    <img src={Velog} alt="velog_logo" />
                    <img src={Github} alt="github_logo" />
                </Row>
                <Pretendard className="font15" sx={{ mt: 3 }}>© 2023. Futbolista. all rights reserved.</Pretendard>
            </Stack>
        </BackGround>
    )
}

export default LandingFour;