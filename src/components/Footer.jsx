import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h2``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;


const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white; 
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fce4ec" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>¡CAM</Logo>
                <Desc>Somos un negocio dedicado dedicado a la venta de productos Apple hace mas de 10 años, esperamos que confies en nosotros para tu proxima compra. Podes adquirir nuestros productos a traves de la web o acercarte a nuestra tienda donde te brindaremos la mejor atencion.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="76FF03">
                        <WhatsApp/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>

                <Title>Links utiles</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Carrito</ListItem>
                    <ListItem>¡Phone</ListItem>
                    <ListItem>MacBook</ListItem>
                    <ListItem>¡Pad</ListItem>
                    <ListItem>Terminos y condiciones</ListItem>
                </List>
            </Center>
            <Right>
                    <Title>Contacto</Title>
                    <ContactItem>
                       <Room style={{marginRight:"10px"}}/> Calle numero 10, Buenos Aires
                    </ContactItem>
                    <ContactItem>
                        <Phone style={{marginRight:"10px"}}/> +54 11 6666-6666
                    </ContactItem>
                    <ContactItem>
                        <MailOutline style={{marginRight:"10px"}}/> icam@gmail.com
                    </ContactItem>
                    <Payment src="https://creea.co/wp-content/uploads/2020/06/Franquicias-TC.png?189db0&189db0"/>



            </Right>
        </Container>
    )
}

export default Footer
