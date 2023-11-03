import Header from "../components/Header";
import Footer from "../components/Footer";
import BackGround from "../components/layouts/BackGround";
import Section from "../components/layouts/Section";
import InnerSection from "../components/layouts/InnerSection";
import All from "../assets/images/all.jpg";
import Nike from "../assets/images/nike.jpg";
import Adidas from "../assets/images/adidas.jpg";
import Puma from "../assets/images/puma.jpg";
import Mizuno from "../assets/images/mizuno.jpg";
import NewBalance from "../assets/images/newbalance.jpg";
import Righteous from "../components/Texts/Righteous";
import Column from "../components/layouts/Column";
import { Link } from "react-router-dom";

const backgroundImages: { name: string; url: string, link: string }[] = [
    { "name": "All", "url" : All, "link": "/all" },
    { "name": "Nike", "url" : Nike, "link": "/nike" },
    { "name": "adidas", "url" : Adidas, "link": "/adidas" },
    { "name": "PUMA", "url" : Puma, "link": "/puma" },
    { "name": "Mizuno", "url" : Mizuno, "link": "/mizuno" },
    { "name": "Others", "url" : NewBalance, "link": "/others" },
]

const Main: React.FC = () => {
    return(
        <div>
            <Header />
            <BackGround sx={{ bgcolor: "#F7F7F7", mt: 7 }}>
                <Column sx={{ maxWidth: "1048px", m: "0 auto", width: "100%"}}>
                {backgroundImages.map((imageURL, i) => (
                    <Section className="section" key={i} sx={{ background: `url(${imageURL.url})`, backgroundSize: 'cover', backgroundPosition: "center center" }}>
                        <Link to={imageURL.link}>
                        <InnerSection className="inner_section">
                            <Righteous sx={{ fontSize: "32px", color: "#FCFCFC" }}>{imageURL.name}</Righteous>
                        </InnerSection>
                        </Link>
                    </Section>
                ))}
                </Column>
            </BackGround>
            <Footer />
        </div>
    )
}

export default Main;