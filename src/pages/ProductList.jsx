import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer"
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h2`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}:
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ margiRight: "0px", fontSize: "17px" })}:
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}:
`;


const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("masNuevos");

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };
   


    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtrar productos:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>
                            Color
                        </Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>gold</Option>
                        <Option>gray</Option>
                        <Option>pink</Option>
                        <Option>blue</Option>
                        <Option>red</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                        <Option>purple</Option>

                    </Select>
                    <Select name="storage" onChange={handleFilters}>
                    <Option disabled>GB</Option>
                    <Option disabled>iPhone/ iPad</Option>
                        <Option>64 GB</Option>
                        <Option>128 GB</Option>
                        <Option>256 GB</Option>
                        <Option>512 GB</Option>
                        <Option>1 TB</Option>
                    <Option disabled>Mac/ iPad pro</Option>
                        <Option>8 GB RAM | 256 GB SSD</Option>
                        <Option>8 GB RAM | 512 GB SSD</Option>
                        <Option>16 GB RAM | 512 GB SSD</Option>
                        <Option>16 GB RAM | 1 TB SSD</Option>
                    </Select>

                </Filter>
                <Filter>
                    <FilterText>Ordenar por:</FilterText>
                    <Select onChange={e => setSort(e.target.value)}>
                        <Option value="masNuevos">Mas nuevos</Option>
                        <Option value="precioMasBajo">Precio (mas bajo)</Option>
                        <Option value="precioMasAlto">Precio (mas alto)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
