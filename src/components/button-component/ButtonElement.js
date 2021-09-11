import styled from "styled-components";

const BtnPrimary = styled.button`
    color: #fff;
    background: #3829E0;
    outline: none;
    border: none;
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    font-weight: 900;
    font-family: 'Red Hat Display', sans-serif;
    cursor: pointer;
    transition: all 0.5s ease;
    box-shadow: 0 10px 20px 0 rgba(56, 41, 224, 0.25);
    margin-bottom: 12px;

    :hover {
        background: #766CF1;
    }
`

const BtnSecondary = styled.button`
    color: #7280A7;
    background: transparent;
    outline: none;
    border: none;
    padding: 10px;
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    font-weight: 900;
    font-family: 'Red Hat Display', sans-serif;
    cursor: pointer;
    transition: all 0.5s ease;       
`

export {BtnPrimary, BtnSecondary}
