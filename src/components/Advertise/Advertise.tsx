import React from 'react'
import {Card} from 'react-bootstrap'

import { IAdvertise } from '../../types/types';

import './advertise.sass';

interface AdvertiseProps {
    advertise: IAdvertise;
    onClick: (advertise: IAdvertise) => void;
};


const Advertise: React.FC<AdvertiseProps> = ({advertise, onClick}) => {
  return (
    <Card 
            className="contact-card"
            onClick={() => onClick(advertise)}
        >
            <div className="contact-card__date">
                <div>{new Date(advertise.date).toUTCString().substring(5, 17)}</div>
            </div>
            <div className="contact-card__text">{advertise.id}</div>
        </Card>  
  )
}

export default Advertise