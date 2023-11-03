import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../contexts/store";
import { logout } from "../contexts/authAction";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, IconButton, Collapse, List, ListItem, ListItemText } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Row from "./layouts/Row";
import Righteous from "./Texts/Righteous";
import Logo from "../assets/logo/logo.png";

const listItemLogin: { link: string; text: string }[] = [
    { link: "/", text: "Logout" },
    { link: "/register", text: "MyPage"},
    { link: "/main", text: "Home"},
    { link: "/mesure", text: "Recommendation"},
    { link: "/", text: "Terms & Policy"},
];

const listItemLogout: { link: string; text: string }[] = [
    { link: "/signin", text: "Login" },
    { link: "/main", text: "Home"},
    { link: "/mesure", text: "Recommendation"},
    { link: "/", text: "Terms & Policy"},
];

const Header: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const LogIn = useSelector((state: RootState) => state.auth.LoggedIn);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return(
        <AppBar sx={{ backgroundColor: "#FCFCFC", boxShadow: 0, p: 1.2 }}>
            <Row justifyContent="space-between" sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Button sx={{ ml: 2}} href="/">
                    <img src={Logo} alt="logo" />
                    <Righteous sx={{ color: "#494949", pl: 0.5 }}>Futbolista</Righteous>
                </Button>
                {open ? (
                    <IconButton onClick={handleClick}><CloseIcon /></IconButton>
                ): (
                    <IconButton onClick={handleClick}><MenuIcon /></IconButton>
                )}
            </Row>
            <Row justifyContent="space-between" sx={{ display: { xs: 'none', md: 'flex' }, width: "85%", m: "0 auto", maxWidth: "1048px"}}>
                <Button sx={{ ml: 2}} href="/">
                    <img src={Logo} alt="logo" />
                    <Righteous sx={{ color: "#494949", pl: 0.5 }}>Futbolista</Righteous>
                </Button>
                <Row spacing={2}>
                {LogIn ? (
                    listItemLogin.map((item, i) => (
                        <Button href={item.link} key={i} onClick={() => {if(item.text === "Logout") {handleLogout()}}}>
                                <Righteous sx={{ color: "#494949", fontSize: "18px" }}>{item.text}</Righteous>
                        </Button>
                    ))) : (
                    listItemLogout.map((item, i) => (
                        <Button href={item.link} key={i}>
                                <Righteous sx={{ color: "#494949", fontSize: "18px" }}>{item.text}</Righteous>
                        </Button>
                    )))
                }
                </Row>
            </Row>
            <Collapse in={Boolean(open)} unmountOnExit timeout="auto">
                <List disablePadding>
                {LogIn ? (
                    listItemLogin.map((item, i) => (
                        <ListItem key={i}>
                            <ListItemText primary={
                                <Button href={item.link} onClick={() => {if(item.text === "Logout") {handleLogout()}}}>
                                        <Righteous sx={{ color: "#494949", fontSize: "18px" }}>{item.text}</Righteous>
                                </Button>} />
                        </ListItem>
                    ))) : 
                        (
                    listItemLogout.map((item, i) => (
                        <ListItem key={i}>
                            <ListItemText primary={
                                <Button href={item.link}>
                                        <Righteous sx={{ color: "#494949", fontSize: "18px" }}>{item.text}</Righteous>
                                </Button>} />
                        </ListItem>
                    )) 
                )}
                </List>
            </Collapse>
        </AppBar>
    )
}

export default Header;