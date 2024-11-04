import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {MdEmail , MdLock} from 'react-icons/md';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Title, TitleLogin, SubTitleLogin, CriarText, EsqueciText,  Column, Row, Wrapper} from "./styles";

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
  }).required();

  
const Login= () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(isValid, errors, control);

    const onSubmit = data => console.log(data);

    const handleClickSignIn = () => {
        navigate('/feed');
    }

    return (<>
        <Header />
        <Container> 
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu Cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._ </SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }
