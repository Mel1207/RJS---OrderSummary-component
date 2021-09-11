import React from 'react'
import { ImgOverlay,CardStyled, CardImg, CardH1, CardText, CardBody } from './CardElement'
import CardAvatar from './../../images/illustration-hero.svg'
import Pattern from './../../images/pattern-background-desktop.svg'
import { BtnPrimary, BtnSecondary } from '../button-component/ButtonElement'
import MusicPlanItem from '../music-plan-component'



const Card = () => {
    return (
        <>
            <ImgOverlay src={Pattern} />
            <CardStyled>
                <CardImg src={CardAvatar}/>
                <CardBody> 
                    <CardH1 >Order Summary</CardH1>
                    <CardText>You can now listen to millions of songs, audiobooks, and podcast on any device anywhere you like!</CardText>
                    <MusicPlanItem />

                    <BtnPrimary>Proceed to Payment</BtnPrimary>
                    <BtnSecondary>Cancel Order</BtnSecondary>
                </CardBody>
            </CardStyled>
        </>
    )
}

export default Card
