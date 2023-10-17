import styled from 'styled-components'
import tags from './tags.json'

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const ContainerSectionTags = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 8px;
    margin-top: 24px;
    gap: 24px;
`

const BlocoTags = styled.div`
    display: flex;
    gap: 24px;
`

const Tags = () => {
    return(
        <>
            <ContainerSectionTags>
                <TagTitulo>
                    Busque por tags:
                </TagTitulo>

                <BlocoTags>
                    {tags.map
                        (tag => <Tag key={tag.id}>{tag.titulo}</Tag>)
                    }
                </BlocoTags>
            </ContainerSectionTags>
        </>
    )
}

export default Tags