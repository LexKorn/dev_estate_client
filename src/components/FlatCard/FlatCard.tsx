import React from 'react'
import {Card} from 'react-bootstrap'

import { IFlat } from '../../types/types';
import { room_1, room_2, room_3, room_4, room_s } from '../../assets/img';

import './flatCard.sass';

interface FlatCardProps {
    flat: IFlat;
    onClick: (flat: IFlat) => void;
};


const FlatCard: React.FC<FlatCardProps> = ({flat, onClick}) => {
  return (
    <Card 
            className="flat-card"
            onClick={() => onClick(flat)}
        >
            <div className="flat-card__date">
                <div>{new Date(flat.date).toUTCString().substring(5, 17)}</div>
            </div>
            <div className="flat-card__wrapper">
                <div className="flat-card__left">
                    {flat.rooms === 1 ?
                        <img src={room_1} alt="1-room" />
                        : flat.rooms === 2 ?
                        <img src={room_2} alt="2-rooms" />
                        : flat.rooms === 3 ?
                            <img src={room_3} alt="3-rooms" />
                        : flat.rooms === 4 ?
                            <img src={room_4} alt="4-rooms" />
                        :
                        <img src={room_s} alt="studio" />
                    }
                </div>
                <div className="flat-card__middle">
                    <div>{flat.rooms}-комнатная {flat.area}м2</div>
                    <div>этаж {flat.level} из {flat.levels}</div>
                    <div>тип здания - 
                        {flat.building_type === 1 ? 
                            ' панельное' 
                            : flat.building_type === 2 ? 
                            ' монолитное' 
                            : flat.building_type === 3 ? 
                            ' кирпичное' 
                            : flat.building_type === 4 ? 
                            ' блочное' 
                            : flat.building_type === 5 ? 
                            ' деревянное' 
                            :
                            ' другое'
                        }
                    </div>
                </div>
                <div className="flat-card__right">
                    <div>{flat.price}</div>
                    <div>
                        <i className="bi bi-list-task flat-card__icon" onClick={() => {}}></i>
                        <i className="bi bi-heart flat-card__icon" onClick={() => {}}></i>
                    </div>
                </div>
            </div>
        </Card>  
  )
}

export default FlatCard