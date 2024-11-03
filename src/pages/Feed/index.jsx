import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import bannerDio from "../../assets/banner.jpg";

import { Container, TextContent, Title, TitleHighLight } from "./styles";

const Feed= () => {
    return (<>
        <Header />
        <Container> 
            <Card />
            <UserInfo percentual={35} nome="Fernando Laterza" image={"https://avatars.githubusercontent.com/u/111194951?v=4"}/>

        </Container>
    </>)
}

export { Feed }
