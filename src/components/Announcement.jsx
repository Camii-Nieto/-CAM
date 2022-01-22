import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #9575cd;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
    return (
        <Container>
            Con la compra de cualquier producto el envio es gratis!!
        </Container>
    )
}

export default Announcement
