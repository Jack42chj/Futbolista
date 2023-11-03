import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackGround from "../components/layouts/BackGround";
import Row from "../components/layouts/Row";
import Righteous from "../components/Texts/Righteous";
import { Button, TableContainer, Box, Paper, Table, TableHead, TableCell, TableRow, TableBody, Rating } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { AxiosError } from "axios";
import { get_recommend } from "../services/userServices";

const Recommend = () => {
    const [resData, setResData] = useState<{ Name: string }[]>([]);

    const getRecommendData = async () => {
        try{
            const response = await get_recommend();
            if(response.status === 200){
                setResData(response.data.result);
            }
        } catch (err: unknown) {
            const Error = err as unknown as AxiosError;
            if (Error.response && (Error.response.status === 401)) {
                alert('데이터가 존재하지 않습니다.');
            } 
            else alert("서버 통신에 문제가 있습니다.");
        }
    };
    useEffect(() => {
        getRecommendData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const rows = [];

    function createData(number: number, name: string, rating: number){
        return { number, name, rating };
    }

    for (var i = 0; i < resData.length; i++) {
        rows.push(createData(i + 1, resData[i].Name as any, 5));
    }

    return(
        <div>
        <Header />
        <BackGround sx={{ alignItems: "center"}}>
            <Righteous sx={{ fontSize: "32px", color: "#494949", mt: 10 }}>Recommendation</Righteous>
            <Box sx={{ width: "50%", maxHeight: "500px", backgroundColor: "#242424", mt: 5, mb: 3, overflow: "auto", border: "3px solid #D4D4D4", borderRadius: 2, minWidth: "340px",
                "::-webkit-scrollbar": { width: "5px", backgroundColor: "#494949" },
                "::-webkit-scrollbar-thumb": { backgroundColor: "#D0D0D0" }
            }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'><Righteous sx={{fontSize: 14, fontWeight: "bold"}}>No.</Righteous></TableCell>
                                <TableCell align='center'><Righteous sx={{fontSize: 14, fontWeight: "bold"}}>Shoes Name</Righteous></TableCell>
                                <TableCell align='center'><Righteous sx={{fontSize: 14, fontWeight: "bold"}}>Recommendation Rate</Righteous></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.number}
                                sx={{ '&:last-child td, &:last-child th': { border : 0 } }}>
                                    <TableCell align='center' component="th" scope='row'>
                                        <Righteous sx={{fontSize: 12, fontWeight: "bold"}}>{row.number}</Righteous>
                                    </TableCell>
                                    <TableCell align='center'><Righteous sx={{ fontSize: 12, fontWeight: "bold"}} >{row.name}</Righteous></TableCell>
                                    <TableCell align='center'>
                                        <Rating value={row.rating} readOnly/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Button href="/mesure" sx={{ bgcolor: "#FCFCFC", my: 2, color: "#494949", borderRadius: 8, border: "3px solid", height: "60px", justifyContent: 'flex-start', pl: 3, maxWidth: "330px", width: "100%" }}>
                <ArrowBackIosNewIcon />
                <Righteous sx={{ ml: 12 }}>Back</Righteous>
            </Button>
            <Row justifyContent="center" mb={6}>
                <a href="/result">
                    <Righteous sx={{ color: "#8ABEFF" }}>See More</Righteous>
                </a>
            </Row>
        </BackGround>
        <Footer />
    </div> 
    )
}

export default Recommend;