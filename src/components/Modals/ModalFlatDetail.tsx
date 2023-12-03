import React from 'react'
import {Modal, Tab, Tabs} from 'react-bootstrap'

import { IFlat } from '../../types/types'
import { textDate, convertNumToStr } from '../../utils/calc'
import { room_1, room_2, room_3, room_4, room_s, room_1_plan, room_2_plan, room_3_plan, room_4_plan, room_s_plan, room_1_photo, room_2_photo, room_3_photo, room_4_photo, room_s_photo } from '../../assets/img';

import './modalFlatDetail.sass'

interface ModalFlatDetailProps {
    show: boolean;
    onHide: () => void;
    flat: IFlat;
};

const url = (lat: string, lon: string): string => {
    return `https://geotree.ru/coordinates?lat=${lat}&lon=${lon}&z=10&mlat=${lat}&mlon=${lon}&c=`;
}


const ModalFlatDetail: React.FC<ModalFlatDetailProps> = ({show, onHide, flat}) => {
  return (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
        >
        <Modal.Body 
            className="flat-detail"
            style={{border: flat.object_type === 1 ? '2px solid #ffdd2d' : '2px solid #D0F4F2', borderRadius: '20px'}}
        >
            <div className="flat-detail__wrapper">
                <div className="flat-detail__img">
                    <Tabs
                        defaultActiveKey="flat"
                        id="fill-tab-example"
                        className="flat-detail__img_tabs"
                        fill
                    >
                        <Tab eventKey="flat" title="План квартиры" >
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
                        </Tab>
                        <Tab eventKey="plan" title="План этажа" >
                            {flat.rooms === 1 ?
                                <img src={room_1_plan} alt="1-room" />
                                : flat.rooms === 2 ?
                                <img src={room_2_plan} alt="2-rooms" />
                                : flat.rooms === 3 ?
                                    <img src={room_3_plan} alt="3-rooms" />
                                : flat.rooms === 4 ?
                                    <img src={room_4_plan} alt="4-rooms" />
                                :
                                <img src={room_s_plan} alt="studio" />
                            }
                        </Tab>
                        <Tab eventKey="photos" title="Фотографии" >
                            {flat.rooms === 1 ?
                                <img src={room_1_photo} alt="1-room" />
                                : flat.rooms === 2 ?
                                <img src={room_2_photo} alt="2-rooms" />
                                : flat.rooms === 3 ?
                                    <img src={room_3_photo} alt="3-rooms" />
                                : flat.rooms === 4 ?
                                    <img src={room_4_photo} alt="4-rooms" />
                                :
                                <img src={room_s_photo} alt="studio" />
                            }
                        </Tab>
                    </Tabs>
                </div>
                <div className="flat-detail__info">
                    <div className="flat-detail__info_flat">{flat.rooms}-комнатная {flat.area} м<sup>2</sup></div>
                    <div className="flat-detail__info_price">{convertNumToStr(flat.price)} руб.</div>
                    <div className="flat-detail__info_subprice">или {convertNumToStr(Math.ceil(flat.price / flat.area))} за м<sup>2</sup></div>
                    <div className="flat-detail__info_info">Этаж: {flat.level} из {flat.levels}</div>
                    <div className="flat-detail__info_info">Тип здания: 
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
                    <div className="flat-detail__info_info">{flat.object_type === 1 ? 'Вторичка' : 'Новостройка'}</div>
                    <div className="flat-detail__info_icons">
                        <i className="bi bi-list-task flat-detail__info_icons-item" onClick={() => {}} data-tooltip="Сравнить"></i>
                        <i className="bi bi-heart flat-detail__info_icons-item" onClick={() => {}} data-tooltip="в Избранное"></i>
                        <i className="bi bi-basket2 flat-detail__info_icons-item" onClick={() => {}} data-tooltip="Забронировать"></i>
                    </div>
                </div>
            </div>
            <a className="flat-detail__link" href={url(flat.geo_lat, flat.geo_lon)} target="_blank" rel="noreferrer" >на карте</a>
            <div className="flat-detail__date">
                Публикация: {textDate(flat.date)}
                {flat.time?.substring(0, 5)}
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default ModalFlatDetail