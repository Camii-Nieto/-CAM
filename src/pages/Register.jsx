import styled from "styled-components";
import {mobile} from "../responsive";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; 
import Swal from 'sweetalert2'

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
    width: 40%;
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
    flex-wrap: wrap; 
`;


const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
        font-size: 12px;
        margin: 20px 0px;
`;

const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: #ff94c2;
        color: white;
        cursor: pointer;
`;

const Register = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = (e)=> {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/register', {
            name: name,
            lastName: lastName,
            username: username,
            email: email,
            password: password
          })
          .then(function (response) {
            Swal.fire({
                title: 'Usuario registrado con exito!',
                text: 'Inicie sesion para continuar',
                icon: 'success',
                confirmButtonText: 'Continuar'
              })
              navigate("/login");

            
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire({
                title: 'El usuario no fue registrado correctamente',
                text: 'Revise los datos ingresados y vuelva a intentarlo',
                icon: 'error',
                confirmButtonText: 'Volver a intentar'
              })
          });
    }


    return (
        <Container>
            <Wrapper>
                <Title>CREAR UNA CUENTA</Title>
                <Form>
                    <Input placeholder="Nombre"
                    onChange={(e)=>setName(e.target.value)}
                    />
                    <Input placeholder="Apellido" 
                    onChange={(e)=>setLastName(e.target.value)}
                    /> 
                    <Input placeholder="Email" type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Input placeholder="Nombre de usuario"
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                    <Input placeholder="Contraseña" type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Agreement>
                        Acepto todos los terminos y condiciones de las <b>Politicas de privacidad</b>
                    </Agreement>
                    <Button onClick={handleClick}>CREAR CUENTA</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register