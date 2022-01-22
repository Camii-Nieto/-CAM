import { useState } from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://www.nit.pt/wp-content/uploads/2021/09/4404552076ba9789de8ac1c79fcf2934.jpg") center;
    background-size: cover;    
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })};

`;
    
const Title = styled.h2`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;


const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #ff94c2;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: red;
        cursor: not-allowed;
    }
`;

const LinkText = styled.a`
    margin: 5px 0px;
    font-size: 13px;
    text-decoration: underline;
    cursor: pointer;
`;


const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    const handleClick = (e)=> {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/login', {
            username: username,
            password: password
          })
          .then(function (response) {
            localStorage.setItem('token', response.data.accessToken);
            Swal.fire({
                title: 'Sesion iniciada con exito!',
                icon: 'success',
                confirmButtonText: 'Continuar'
              })
              navigate("/");
            
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire({
                title: 'Algo esta mal',
                text: 'Revise sus datos y vuelva a intentarlo',
                icon: 'error',
                confirmButtonText: 'Continuar'
              });
          });
    }

    return (
        <Container>
            <Wrapper>
                <Title>ACCEDER A TU CUENTA</Title>
                <Form>
                    <Input placeholder="Nombre de usuario" 
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                    <Input placeholder="Contraseña"
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Button onClick={handleClick}>INGRESAR</Button>
                    <LinkText>No recuerdas tu contraseña?</LinkText>
                    <Link  to="/register">
                    <LinkText>No tienes una cuenta? Crea una haciendo click aqui</LinkText>
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
