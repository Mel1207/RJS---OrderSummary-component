import React from 'react'
import { CardStyled, CardImg, CardH1, CardText, CardBody } from './CardElement'
import CardAvatar from './../../images/illustration-hero.svg'


const Card = () => {
    return (
        <>
            <CardStyled>
                <CardImg src={CardAvatar}/>
                <CardBody> 
                    <CardH1 >Order Summary</CardH1>
                    <CardText>You can now listen to millions of songs, <br /> audiobooks, and podcast on any device <br /> anywhere you like!</CardText>
                </CardBody>
            </CardStyled>
            
        </>
    )
}

export default Card
