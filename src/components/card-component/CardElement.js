import styled from 'styled-components'

const CardStyled = styled.div`
    background: #fff;
    max-width: 350px;
    border-radius: 20px;
`
const CardImg = styled.img`
    width: 100%;
    object-fit: contain;
    height: auto;
    border-radius: 20px 20px 0 0;

`

const CardH1 = styled.h1`
    font-size: 30px;
    color: #1F2F56;
    font-weight: 600;
    text-align: center;
    margin: 0 0 15px 0;
`

const CardText = styled.p`
    font-size: 16px;
    color: #7280A7;
    font-weight: 500;
    line-height: 1.5em;
    text-align: center;
`
const CardBody = styled.div`
    padding: 30px 20px;
`

export {CardStyled, CardImg, CardH1, CardText, CardBody}