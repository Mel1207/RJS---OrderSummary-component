import React from 'react'
import { MusicItem } from './music-plan-elements'
import MscIcon from './../../images/icon-music.svg'

const MusicPlanItem = () => {
    return (
        <MusicItem>
            <img src={MscIcon} />
            <MusicDetails>
                <MusicPlanName>Annual Plan</MusicPlanName>
                <MusicPrice>$59.99/year</MusicPrice>
            </MusicDetails>
            <a href="#!">Change</a>
        </MusicItem>
    )
}

export default MusicPlanItem
