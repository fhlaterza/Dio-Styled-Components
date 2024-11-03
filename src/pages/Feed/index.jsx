import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import bannerDio from "../../assets/banner.jpg";

import { Container, TitleHighLight, Title, Column } from "./styles";

const Feed= () => {
    return (<>
        <Header autenticado={true}/>
        <Container> 
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={35} nome="Fernando Laterza" image={"https://avatars.githubusercontent.com/u/111194951?v=4"}/>
                <UserInfo percentual={50} nome="Fernando Laterza" image={"https://avatars.githubusercontent.com/u/111194951?v=4"}/>
                <UserInfo percentual={65} nome="Fernando Laterza" image={"https://avatars.githubusercontent.com/u/111194951?v=4"}/>
                <UserInfo percentual={75} nome="Fernando Laterza" image={"https://avatars.githubusercontent.com/u/111194951?v=4"}/>
                <UserInfo percentual={90} nome="Fernando Laterza" image={"https://avatars.githubusercontent.com/u/111194951?v=4"}/>
            </Column>
        </Container>
    </>)
}

export { Feed }
