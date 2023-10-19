import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ContainerGaleria = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito}) =>{

    return(
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ContainerGaleria>
                        {fotos.map(foto => <Imagem 
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternarFavorito={aoAlternarFavorito}
                            key={foto.id}
                            foto={foto} 
                        />)}
                    </ContainerGaleria>
                </SecaoFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )

}

export default Galeria