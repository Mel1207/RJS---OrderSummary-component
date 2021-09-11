import styled from "styled-components";

const MusicItem = styled.div`
    border-radius: 8px;
    background: #F5F7FF;
    padding: 13px 18px;
    margin: 15px 0 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const MusicPlanDetails = styled.div`
    display: flex;
    align-items: center;
`

const MusicIcon = styled.img`
    height: 40px;
    width: 40px;
    margin-right: 12px;
`

const MusicPlanName = styled.p`
    color: #1F2F56;
    font-weight: 900;
`

const MusicPrice = styled.p`
    color: #7280A7;
`

export {MusicItem, MusicPlanName, MusicPrice, MusicPlanDetails, MusicIcon}