import styled from "styled-components";
import Nabvar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeAll } from "../redux/cartRedux";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h2`
    font-weight: 300;
    text-align: center;
    font-size: 30px;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex:3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;

const ProductSize = styled.span`
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h2`
    font-weight: 200;
    font-size: 28px;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    border: none;
    font-weight: 600;
`;

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const quantity = useSelector(state=>state.cart.quantity);
    const dispatch = useDispatch();
    const emptyCart = () =>{
        dispatch(removeAll({...cart}));
    }

    return (
        <Container>
            <Nabvar/>
            <Announcement/>
            <Wrapper>
                <Title>CARRITO</Title>
                <Top>

                    <Link to="/">
                    <TopButton>SEGUIR COMPRANDO</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>Carrito de compras({quantity})</TopText>
                    </TopTexts>
                    <TopButton type="filled" onClick={emptyCart}>VACIAR CARRITO</TopButton>
                </Top>
                <Bottom>

                    <Info>
                        {cart.products.map(product =>(<Product key={product._id}>
                            <ProductDetail>

                                <Image src={`../img/${product.img}.jpg`}/>
                                <Details>
                                    <ProductName><b>Product:</b>{product.title}</ProductName>
                                    <ProductId><b>ID:</b>{product._id}</ProductId>
                                    <ProductColor color={product.color}/>
                                    <ProductSize><b>Capacidad:</b>{product.storage}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <ProductAmount>Cantidad:{product.quantity}</ProductAmount>
                                </ProductAmountContainer>
                                <ProductPrice>${product.price*product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        ))}
                        <Hr/>
                        
                    </Info>
                    <Summary>
                        <SummaryTitle>TOTAL DE LA COMPRA</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Impuestos</SummaryItemText>
                            <SummaryItemPrice>$200</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Descuento</SummaryItemText>
                            <SummaryItemPrice>-$200</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CONFIRMAR COMPRA</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart