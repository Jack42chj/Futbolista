import { Stack } from "@mui/material";
import Row from "../components/layouts/Row";
import Pretendard from "./Texts/Pretendard";
import Velog from "../assets/logo/velog.png";
import Github from "../assets/logo/github.png";

const Footer = () => {
    return(
        <Row sx={{ bgcolor: "#F0F0F0", py: 3, color: "#838383" }}>
            <Stack sx={{ flex: 1, px: 5 }}>
                <Stack sx={{ flex: 1 }}>
                    <Pretendard className="font15" sx={{ py: 2, fontWeight: "bold" }}>풋볼리스타</Pretendard>
                    <Pretendard className="font15">최호진</Pretendard>
                    <Pretendard className="font15">서울 노원구 석계로13길 23-10 광운대학교 새빛관</Pretendard>
                    <Pretendard className="font15">이메일 hojinch99@kw.ac.kr</Pretendard>
                    <Pretendard className="font15">전화번호 010-5064-8771</Pretendard>
                    <Row mt={3} spacing={1}>
                        <img src={Velog} alt="velog_logo" />
                        <img src={Github} alt="github_logo" />
                    </Row>
                    <Pretendard className="font15" sx={{ mt: 1 }}>© 2023. Futbolista. all rights reserved.</Pretendard>
                </Stack>
            </Stack>
        </Row>
    )
}

export default Footer;