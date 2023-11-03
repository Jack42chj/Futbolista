import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Inputbase from "../../components/Inputs/InputBase";
import FormInputError from "../../components/Inputs/FormInputError";
import AuthBtn from "../../components/Inputs/AuthBtn";
import BackGround from "../../components/layouts/BackGround";
import FormBox from "../../components/layouts/FormBox";
import Righteous from "../../components/Texts/Righteous";
import { checkTrim } from "../../utils/Trim";
import { checkName } from "../../utils/Regex";
import { signup } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

interface PostData {
    id: string;
    name: string;
    passwd: string;
    checkpw: string;
}

const SignUp = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [passwd, setPasswd] = useState("");
    const [checkpw, setCheckPw] = useState("");
    const [name, setName] = useState("");
    const [checkError, setCheckError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState(false);

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = event.target.value;
        setPasswd(newPassword);
        setConfirm(newPassword === checkpw);
    };
    
    const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCheck = event.target.value;
        setCheckPw(newCheck);
        setConfirm(passwd === newCheck);
    };

    const handleSignup = async (postData: PostData) => {
        try{
            const response = await signup(postData);
            if(response.status === 200) {
                alert("회원가입이 완료되었습니다.");
                navigate("/register", { state: postData.id });
            }
        } catch (err: unknown) {
            const Error = err as unknown as AxiosError;
            if (Error.response && (Error.response.status === 400)) {
                alert('회원가입에 실패하였습니다.');
            }
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const joinData = {
            id: data.get("id") as string,
            name: data.get("name") as string,
            passwd: data.get("passwd") as string,
            checkpw: data.get("checkpw") as string,
        };
        const { id, name, passwd } = joinData;

        if (!checkTrim(id)) setId("ID를 입력해주세요.");
        else setId("");
        
        if (!checkTrim(name)) setName("이름을 입력해주세요.");
        else {
            if(!checkName(name)) setName("이름이 올바르지 않습니다.");
            else setName("");
        }

        if (checkTrim(passwd)) setPasswordError("");
        else setPasswordError("비밀번호를 입력해주세요.");

        if(!checkTrim(checkpw)) setCheckError("비밀번호를 다시 한번 입력해주세요.")
        else{
            if(confirm === true) setCheckError("");
            else setCheckError("비밀번호가 일치하지 않습니다.");
        }

        if (checkTrim(id) && checkTrim(name) && checkTrim(passwd) && checkTrim(checkpw) && confirm === true) {
            handleSignup(joinData);
        }
    };

    return(
        <div>
            <Header />
            <BackGround>
                <FormBox>
                    <Righteous sx={{ fontSize: "32px", color: "#494949", mb: 4 }}>Sign Up</Righteous>
                    <form onSubmit={handleSubmit}>
                        <Inputbase placeholder="ID" name="id" type="text"/>
                        <FormInputError>{id}</FormInputError>
                        <Inputbase placeholder="PASSWORD" name="passwd" type="password" onChange={handlePasswordChange}/>
                        <FormInputError>{passwordError}</FormInputError>
                        <Inputbase placeholder="CONFIRM PASSWORD" name="checkpw" type="password" onChange={handleCheckChange}/>
                        <FormInputError>{checkError}</FormInputError>
                        <Inputbase placeholder="NAME" name="name" type="text"/>
                        <FormInputError>{name}</FormInputError>
                        <AuthBtn type="submit" sx={{ bgcolor: "#494949", mt: 4, color: "#FCFCFC" }}>
                            <Righteous>Sign Up</Righteous>
                        </AuthBtn>
                    </form>
                </FormBox>
            </BackGround>
            <Footer />
        </div> 
    )
}

export default SignUp;