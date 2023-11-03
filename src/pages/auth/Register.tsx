import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Inputbase from "../../components/Inputs/InputBase";
import FormInputError from "../../components/Inputs/FormInputError";
import AuthBtn from "../../components/Inputs/AuthBtn";
import BackGround from "../../components/layouts/BackGround";
import FormBox from "../../components/layouts/FormBox";
import Righteous from "../../components/Texts/Righteous";
import FootImg from "../../assets/images/foot.png";
import Row from "../../components/layouts/Row";
import { useSelector } from "react-redux";
import { RootState } from "../../contexts/store";
import { checkTrim } from "../../utils/Trim";
import { register, get_register } from "../../services/userServices";
import { useNavigate, useLocation } from "react-router-dom";
import { AxiosError } from "axios";

const Register = () => {
    const navigate = useNavigate();
    const LogIn = useSelector((state: RootState) => state.auth.user);
    const recvData = useLocation().state;
    const id = recvData === null ? LogIn?.id : recvData;
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [lengthErr, setLengthErr] = useState("");
    const [widthErr, setWidthErr] = useState("");
    const [heightErr, setHeightErr] = useState("");
    const [check, setCheck] = useState(false);

    const getRegisterData = async () => {
        try{
            const response = await get_register({LogIn});
            if(response.status === 200){
                setLength(response.data? response.data.length : null)
                setWidth(response.data? response.data.width : null)
                setHeight(response.data? response.data.height : null)
            }
        } catch (err: unknown) {
            const Error = err as unknown as AxiosError;
            if (Error.response && (Error.response.status === 401)) {
                alert('저장된 정보가 없습니다.');
            } 
            else alert("저장된 데이터를 불러오는데 실패하였습니다.");
        }
    };
    useEffect(() => {
        getRegisterData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleRegister = async (postData: object) => {
        if(check === true) {
            try{
                const response = await register(postData);
                if(response.status === 200) {
                    alert("발 정보 등록 성공하었습니다.");
                    navigate("/main");
                }
            } catch (err: unknown) {
                const Error = err as unknown as AxiosError;
                if (Error.response && (Error.response.status === 400)) {
                    alert('발 정보 등록 실패하였습니다.');
                }
            }
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const joinData = {
            length: data.get("length") as string,
            width: data.get("width") as string,
            height: data.get("height") as string,
            id
        };
        const { length, width, height } = joinData;

        if (!checkTrim(length)) 
            setLengthErr("발 길이를 입력해주세요.");
        else if(parseFloat(length) > 315 || parseFloat(length) < 215) 
            setLengthErr("정확한 수치를 입력해주세요.");
        else
            setLengthErr("");

        if (!checkTrim(width)) 
            setWidthErr("발 너비를 입력해주세요.");
        else if(parseFloat(width) > 150 || parseFloat(width) < 50)
            setWidthErr("정확한 수치를 입력해주세요.");
        else
            setWidthErr("");

        if (!checkTrim(height)) 
            setHeightErr("발 높이를 입력해주세요.");
        else if(parseFloat(height) > 120 || parseFloat(height) < 20) 
            setHeightErr("정확한 수치를 입력해주세요.");
        else
            setHeightErr("");

        if (!checkTrim(lengthErr) && !checkTrim(widthErr) && !checkTrim(heightErr) && checkTrim(height) && checkTrim(width) && checkTrim(length)) {
            setCheck(true)
            if(check === true)
                handleRegister(joinData);
        }
    };

    return(
        <div>
        <Header />
        <BackGround>
            <FormBox>
                <Righteous sx={{ fontSize: "32px", color: "#494949", mb: 4 }}>Register</Righteous>
                <img src={FootImg} alt="foot_image" style={{ marginBottom: "24px"}} />
                <form onSubmit={handleSubmit}>
                    <Inputbase placeholder="LENGTH" name="length" type="text" value={length} onChange={(e) => setLength(e.target.value)} />
                    <FormInputError>{lengthErr}</FormInputError>
                    <Inputbase placeholder="WIDTH" name="width" type="text" value={width} onChange={(e) => setWidth(e.target.value)}/>
                    <FormInputError>{widthErr}</FormInputError>
                    <Inputbase placeholder="HEIGHT" name="height" type="text" value={height} onChange={(e) => setHeight(e.target.value)}/>
                    <FormInputError>{heightErr}</FormInputError>
                    <AuthBtn type="submit" sx={{ bgcolor: "#494949", my: 2, color: "#FCFCFC" }}>
                        <Righteous>Submit</Righteous>
                    </AuthBtn>
                </form>
                <Row justifyContent="center">
                    <a href="/main">
                        <Righteous sx={{ color: "#FF3333" }}>Submit Later</Righteous>
                    </a>
                </Row>
            </FormBox>
        </BackGround>
        <Footer />
    </div> 
    )
}

export default Register;