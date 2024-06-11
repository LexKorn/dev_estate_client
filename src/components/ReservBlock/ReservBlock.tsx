import React from 'react'

import { IFlat } from '../../types/types'
import { textDate, convertNumToStr, convertBuilding, url } from '../../utils/calc'
import { room_1, room_2, room_3, room_4, room_s, room_1_plan, room_2_plan, room_3_plan, room_4_plan, room_s_plan, room_1_photo, room_2_photo, room_3_photo, room_4_photo, room_s_photo, room_photo_1, room_photo_2, room_photo_3, room_photo_4 } from '../../assets/img';
import Slider from '../Slider/Slider';

import './reservBlock.sass'

interface ReservBlockProps {
    flat: IFlat
}

const arrOfImg: string[] = [room_photo_1, room_photo_2, room_photo_3, room_photo_4];


const ReservBlock: React.FC<ReservBlockProps> = ({flat}) => {
  return (
    <div className='reserv'>
        <div className="reserv__title">
            <div className="reserv__title_flat">{flat.rooms === -1 ? 'Студия' : flat.rooms + '-комнатная'} {flat.area} м<sup>2</sup></div>
            <div className="reserv__title_price">{convertNumToStr(flat.price)} руб.</div>
            <div className="reserv__title_subprice">(или {convertNumToStr(Math.ceil(flat.price / flat.area))} за м<sup>2</sup>)</div>
        </div>
        <div className="reserv__plans">
            {flat.rooms === 1 ?
                <img src={room_1} alt="1-room" />
                : flat.rooms === 2 ?
                <img src={room_2} alt="2-rooms" />
                : flat.rooms === 3 ?
                    <img src={room_3} alt="3-rooms" />
                : flat.rooms >= 4 ?
                    <img src={room_4} alt="4-rooms" />
                :
                <img src={room_s} alt="studio" />
            }
            {flat.rooms === 1 ?
                <img src={room_1_plan} alt="1-room-plan" />
                : flat.rooms === 2 ?
                <img src={room_2_plan} alt="2-rooms-plan" />
                : flat.rooms === 3 ?
                    <img src={room_3_plan} alt="3-rooms-plan" />
                : flat.rooms >= 4 ?
                    <img src={room_4_plan} alt="4-rooms-plan" />
                :
                <img src={room_s_plan} alt="studio-plan" />
            }
        </div>
        <div className="reserv__info">
            <div className="reserv__info_item">Этаж: <span>{flat.level} из {flat.levels}</span></div>
            <div className="reserv__info_item">Площадь кухни: <span>{flat.kitchen_area} м<sup>2</sup></span></div>
            <div className="reserv__info_item">Тип здания: <span>{convertBuilding(flat.building_type)}</span></div>
            <div className="reserv__info_item">{flat.object_type === 1 ? 'Вторичка' : 'Новостройка'}</div>
            <a className="reserv__info_link" href={url(flat.geo_lat, flat.geo_lon)} target="_blank" rel="noreferrer" >на карте &rarr;</a>
            <div className="reserv__info_date">
                Публикация: {textDate(flat.date)}
                {flat.time?.substring(0, 5)}
            </div>
        </div>
        <Slider photos={arrOfImg} />
    </div>
  )
}

export default ReservBlock