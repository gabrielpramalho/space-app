import { styled } from "styled-components"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
`

const Cabecalho = () => {
    return(
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="Space App Logo" />
        </HeaderEstilizado>
    )
}

export default Cabecalho