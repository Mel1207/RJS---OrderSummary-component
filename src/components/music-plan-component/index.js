import React from 'react'
import { MusicItem, MusicIcon, MusicPlanName, MusicPrice, MusicPlanDetails, ActionLink } from './music-plan-elements'
import MscIcon from './../../images/icon-music.svg'

const MusicPlanItem = () => {
    return (
        <MusicItem>
            <MusicPlanDetails>
                <MusicIcon src={MscIcon} />
                <div>
                    <MusicPlanName>Annual Plan</MusicPlanName>
                    <MusicPrice>$59.99/year</MusicPrice>
                </div>
            </MusicPlanDetails>
            <ActionLink href="#!">Change</ActionLink>
        </MusicItem>
    )
}

export default MusicPlanItem
