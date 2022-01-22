import styled from 'styled-components'
import { Search, ShoppingCart } from '@material-ui/icons'
import Badge from '@material-ui/core/Badge';
import {mobile} from "../responsive";
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom"; 

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "10px" })}
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;


const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: black;
    ${mobile({ flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`;

const SearchButton = styled.button`
`

const Navbar = () => {

    const quantity = useSelector(state=>state.cart.quantity);
    const token = window.localStorage.token;
    const navigate = useNavigate();
    const singOf = (e) => {
        e.preventDefault();
       localStorage.removeItem('token');
       Swal.fire({
        title: 'Sesion cerrada con exito!',
        icon: 'success',
        confirmButtonText: 'Continuar'
      })
      navigate("/login");
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input placeholder='Search'/>
                            <SearchButton>
                            <Search style={{color:"gray", fontSize:16}}/>
                            </SearchButton>
                        </SearchContainer>
                    </Left>
                    <Center><Logo>¡CAM.</Logo></Center>
                    {
                    token ? 
                    (<Right>                           
                        <MenuItem onClick={singOf}>CERRAR SESION</MenuItem>
                       
                        <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="secondary">
                                <ShoppingCart />
                            </Badge>
                         </MenuItem>
                        </Link>
                    </Right>) : (<Right>                           
                    <Link to="/register">
                        <MenuItem>REGISTRO </MenuItem>
                        </Link>
                        <Link to="/login">
                        <MenuItem>INGRESAR  </MenuItem>
                        </Link> 
                       
                        <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="secondary">
                                <ShoppingCart />
                            </Badge>
                         </MenuItem>
                        </Link>
                    </Right>)   
                }
                </Wrapper>
            </Container>
        </>
    )
}

export default Navbar
