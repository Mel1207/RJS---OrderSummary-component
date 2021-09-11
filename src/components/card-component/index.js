import React from 'react'
import { CardStyled, CardImg, CardH1, CardText, CardBody } from './CardElement'
import CardAvatar from './../../images/illustration-hero.svg'
import { BtnPrimary, BtnSecondary } from '../button-component/ButtonElement'



const Card = () => {
    return (
        <>
            <CardStyled>
                <CardImg src={CardAvatar}/>
                <CardBody> 
                    <CardH1 >Order Summary</CardH1>
                    <CardText>You can now listen to millions of songs, <br /> audiobooks, and podcast on any device <br /> anywhere you like!</CardText>
                    <BtnPrimary>Proceed to Payment</BtnPrimary>
                    <BtnSecondary>Cancel Order</BtnSecondary>
                </CardBody>
            </CardStyled>
            
        </>
    )
}

export default Card
