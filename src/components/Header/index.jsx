import React from 'react';
import dioLogo from '../../assets/logo-full.webp';

import { BuscarInputContainer, Column, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from './styles';
import { Button } from '../Button';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={dioLogo} alt="Logo da Dio" />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/111194951?v=4" />
                    ) : (
                            <>
                                <MenuRight href="#">Home</MenuRight>
                                <Button title="Entrar"></Button>
                                <Button title="Cadastrar"></Button>
                            </>
                        )
                }
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header };
