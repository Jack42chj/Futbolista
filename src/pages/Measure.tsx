import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Inputbase from "../components/Inputs/InputBase";
import FormInputError from "../components/Inputs/FormInputError";
import AuthBtn from "../components/Inputs/AuthBtn";
import BackGround from "../components/layouts/BackGround";
import FormBox from "../components/layouts/FormBox";
import Righteous from "../components/Texts/Righteous";
import FootImg from "../assets/images/foot.png";
import { checkTrim } from "../utils/Trim";
import { recommend } from "../services/userServices";
import { useNavigate } from "react-router-dom";
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import { AxiosError } from "axios";

const Measure = () => {
    const navigate = useNavigate();
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [field, setField] = useState("");
    const [fieldErr, setFieldErr] = useState("");

    const handleRecommend = async (postData: object) => {
        try{
            const response = await recommend(postData);
            if(response.status === 200) {
                navigate("/recommend");
            }
        } catch (err: unknown) {
            const Error = err as unknown as AxiosError;
            if (Error.response && (Error.response.status === 400)) {
                alert('실패!');
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
            field: data.get("field") as string,
        };
        const { length, width, height, field } = joinData;

        if (!checkTrim(length)) 
            setLength("발 길이를 입력해주세요.");
        else if(parseFloat(length) > 315 || parseFloat(length) < 215) 
            setLength("정확한 수치를 입력해주세요.");
        else
            setLength("");

        if (!checkTrim(width)) 
            setWidth("발 너비를 입력해주세요.");
        else if(parseFloat(width) > 150 || parseFloat(width) < 50)
            setWidth("정확한 수치를 입력해주세요.");
        else
            setWidth("");

        if (!checkTrim(height)) 
            setHeight("발 높이를 입력해주세요.");
        else if(parseFloat(height) > 120 || parseFloat(height) < 20) 
            setHeight("정확한 수치를 입력해주세요.");
        else
            setHeight("");

        if(!checkTrim(field)) {
            setFieldErr("구장을 선택해주세요.");
        }
        else{
            setFieldErr("");
        }
        
        if (checkTrim(height) && checkTrim(width) && checkTrim(length) && !checkTrim(fieldErr)) {
            handleRecommend(joinData);
            console.log(1);
        }
        else
            console.log(!checkTrim(height), width, length, fieldErr);
    };

    return(
        <div>
        <Header />
        <BackGround>
            <FormBox>
                <Righteous sx={{ fontSize: "32px", color: "#494949", mb: 4 }}>Mesurement</Righteous>
                <img src={FootImg} alt="foot_image" style={{ marginBottom: "24px"}} />
                <form onSubmit={handleSubmit}>
                    <FormControl variant="filled" sx={{ width: "100%", mb: 1, border: 0 }}>
                        <InputLabel id="sel"><Righteous sx={{ color: "#999" }}>GROUND</Righteous></InputLabel>
                        <Select
                            labelId="sel"
                            label={<Righteous>GROUND</Righteous>}
                            id="field"
                            name="field"
                            value={field}
                            onChange={(e) => setField(e.target.value)}
                            disableUnderline
                            sx={{ borderRadius: 2 }}
                        >
                            <MenuItem value=""><Righteous sx={{ color: "#494949" }}>Ground</Righteous></MenuItem>
                            <MenuItem value={"FG"}><Righteous sx={{ color: "#494949" }}>Firm Ground</Righteous></MenuItem>
                            <MenuItem value={"SG"}><Righteous sx={{ color: "#494949" }}>Soft Ground</Righteous></MenuItem>
                            <MenuItem value={"AG"}><Righteous sx={{ color: "#494949" }}>Artificial Ground</Righteous></MenuItem>
                            <MenuItem value={"TF"}><Righteous sx={{ color: "#494949" }}>Turf Ground</Righteous></MenuItem>
                            <MenuItem value={"IC"}><Righteous sx={{ color: "#494949" }}>Indoor</Righteous></MenuItem>
                        </Select>
                        <FormInputError>{fieldErr}</FormInputError>
                    </FormControl>
                    <Inputbase placeholder="LENGTH" name="length" />
                    <FormInputError>{length}</FormInputError>
                    <Inputbase placeholder="WIDTH" name="width" />
                    <FormInputError>{width}</FormInputError>
                    <Inputbase placeholder="HEIGHT" name="height" />
                    <FormInputError>{height}</FormInputError>
                    <AuthBtn type="submit" sx={{ bgcolor: "#494949", my: 2, color: "#FCFCFC" }}>
                        <Righteous>Start</Righteous>
                    </AuthBtn>
                </form>
            </FormBox>
        </BackGround>
        <Footer />
    </div> 
    )
}

export default Measure;