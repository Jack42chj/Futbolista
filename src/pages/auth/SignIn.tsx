import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Inputbase from "../../components/Inputs/InputBase";
import FormInputError from "../../components/Inputs/FormInputError";
import AuthBtn from "../../components/Inputs/AuthBtn";
import BackGround from "../../components/layouts/BackGround";
import FormBox from "../../components/layouts/FormBox";
import Righteous from "../../components/Texts/Righteous";
import Row from "../../components/layouts/Row";
import { checkTrim } from "../../utils/Trim";
import { signin } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { login_success } from "../../contexts/authAction";

interface PostData {
    id: string;
    passwd: string;
}

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [passwd, setPasswd] = useState("");

    const handleLogin = async (postData: PostData) => {
        try{
            const response = await signin(postData);
            if(response.status === 200) {
                const user = { id: postData.id };
                dispatch(login_success(user));
                navigate('/main');
            }
        } catch (err: unknown) {
            const Error = err as unknown as AxiosError;
            if (Error.response && (Error.response.status === 401)) {
                alert('비밀번호를 확인해주세요.');
            } 
            else if (Error.response && (Error.response.status === 404)) {
                alert('존재하지 않는 회원정보입니다.');
            }
            else alert("로그인 실패하였습니다.");
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const joinData = {
            id: data.get("id") as string,
            passwd: data.get("passwd") as string,
        };
        const { id, passwd } = joinData;

        if (checkTrim(id)) setId("");
        else setId("ID를 입력해주세요.");

        if (checkTrim(passwd)) setPasswd("");
        else setPasswd("비밀번호를 입력해주세요.");

        if (checkTrim(id) && checkTrim(passwd)) {
            handleLogin(joinData);
        }
    };

    return(
        <div>
            <Header />
            <BackGround>
                <FormBox>
                    <Righteous sx={{ fontSize: "32px", color: "#494949", mb: 4 }}>Login</Righteous>
                    <form onSubmit={handleSubmit}>
                        <Inputbase placeholder="ID" name="id" type="text"/>
                        <FormInputError>{id}</FormInputError>
                        <Inputbase placeholder="PASSWORD" name="passwd" type="password"/>
                        <FormInputError>{passwd}</FormInputError>
                        <AuthBtn type="submit" sx={{ bgcolor: "#494949", mt: 2, color: "#FFFFFF" }}>
                            <Righteous sx={{ color: "#FCFCFC"}}>Login</Righteous>
                        </AuthBtn>
                    </form>
                    <Row justifyContent="space-evenly" my={1} sx={{ color: "#494949"}}>
                        <Righteous>Find PW</Righteous>
                        <Righteous>|</Righteous>
                        <a href="/signup">
                            <Righteous>Sign Up</Righteous>
                        </a>
                    </Row>
                    <AuthBtn sx={{ bgcolor: "#00C75A", my: 1 }}>
                        <Righteous sx={{ color: "#FCFCFC"}}>Log in with Naver</Righteous>
                    </AuthBtn>
                    <AuthBtn sx={{ bgcolor: "#FEE500", my: 1 }}>
                        <Righteous sx={{ color: "#000000"}}>Login with Kakao</Righteous>
                    </AuthBtn>
                    <AuthBtn sx={{ bgcolor: "#4285F4", my: 1}}>
                        <Righteous sx={{ color: "#FFFFFF"}}>Sign in with Google</Righteous>
                    </AuthBtn>
                </FormBox>
            </BackGround>
            <Footer />
        </div> 
    )
}

export default SignIn;