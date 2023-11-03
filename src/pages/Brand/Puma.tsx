import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Righteous from "../../components/Texts/Righteous";
import BackGround from "../../components/layouts/BackGround";
import Section from "../../components/layouts/Section";
import PumaImage from "../../assets/images/puma.jpg";
import BrandSection from "../../components/layouts/BrandSection";
import Column from "../../components/layouts/Column";
import Items from "../../components/layouts/Items";
import { Grid } from "@mui/material";
import { AxiosError } from "axios";
import { get_puma } from "../../services/userServices";

const Puma = () => {
    const [pumaData, setPumaData] = useState<{ name: string, image: string }[]>([]);
    const getPumaData = async () => {
        try{
            const response = await get_puma();
            if(response.status === 200){
                setPumaData(response.data);
            }
        } catch (err: unknown) {
            const Error = err as unknown as AxiosError;
            if (Error.response && (Error.response.status === 401)) {
                alert('데이터가 없습니다.');
            } 
            else alert("데이터를 불러오는데 실패하였습니다.");
        }
    };
    useEffect(() => {
        getPumaData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div>
            <Header />
            <BackGround sx={{ mb: 5 }}>
                <Section className="section" sx={{ background: `url(${PumaImage})`, backgroundSize: 'cover', backgroundPosition: "center center" }}>
                    <BrandSection className="inner_section" sx={{ hover : "none"}}>
                        <Righteous sx={{ fontSize: "32px", color: "#FCFCFC" }}>PUMA</Righteous>
                    </BrandSection>
                </Section>
                <Column justifyContent="center">
                    <Column justifyContent="flex-start" sx={{ maxWidth: "1140px", mt: 5, mb: 3, alignItems: "flex-start", width: "80%"}}>
                        <Righteous sx={{ fontSize: "28px"}}>Football Boots</Righteous>
                    </Column>
                    <Column sx={{ bgcolor: "#494949", width: "80%", maxWidth: "1140px", p: 1, borderRadius: "3px 3px 0px 0px"}}>
                        <Righteous sx={{ fontSize: "18px", color: "#FCFCFC" }}>PUMA Boots</Righteous>
                    </Column>
                    <Column justifyContent="center">
                    <Grid container spacing={4} sx={{ maxWidth: "1140px", mt: 1, mb: 3, alignItems: "center", width: "90%", justifyContent: "center" }}>
                        {pumaData.map((item, index) => (
                            <Grid item xs={6} sm={4.8} md={3.5} lg={3} key={index}>
                                <Items imgURL={item.image} imgName={item.name} />
                            </Grid>
                            ))}
                        </Grid>
                    </Column>
                </Column>
            </BackGround>
            <Footer />
        </div>
    )
}

export default Puma;