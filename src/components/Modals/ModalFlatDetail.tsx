import React from 'react'
import {Modal} from 'react-bootstrap'

import { IFlat } from '../../types/types'
import { textDate, convertNumToStr } from '../../utils/calc'

interface ModalFlatDetailProps {
    show: boolean;
    onHide: () => void;
    flat: IFlat;
};


const ModalFlatDetail: React.FC<ModalFlatDetailProps> = ({show, onHide, flat}) => {
  return (
    <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            >
            <Modal.Body>
                <div className="flat-card__date">
                    <div>{textDate(flat.date)}</div>
                </div>
                <div className="flat-card__wrapper">
                    <div className="flat-card__left">
                        {/* {flat.rooms === 1 ?
                            <img src={room_1} alt="1-room" />
                            : flat.rooms === 2 ?
                            <img src={room_2} alt="2-rooms" />
                            : flat.rooms === 3 ?
                                <img src={room_3} alt="3-rooms" />
                            : flat.rooms === 4 ?
                                <img src={room_4} alt="4-rooms" />
                            :
                            <img src={room_s} alt="studio" />
                        } */}
                    </div>
                    <div className="flat-card__middle">
                        <div className="flat-card__middle_flat">{flat.rooms}-комнатная {flat.area} м<sup>2</sup></div>
                        <div>Этаж: {flat.level} из {flat.levels}</div>
                        <div>Тип здания: 
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
                        <div>Регион: {flat.region}</div>
                        <div>{flat.object_type === 1 ? 'Вторичка' : 'Новостройка'}</div>
                    </div>
                    <div className="flat-card__right">
                        <div className="flat-card__right_price">{convertNumToStr(flat.price)} руб.</div>
                        <div className="flat-card__right_subprice">или {convertNumToStr(Math.ceil(flat.price / flat.area))} за м<sup>2</sup></div>
                        <div className="flat-card__right_icons">
                            <i className="bi bi-list-task flat-card__icon" onClick={() => {}}></i>
                            <i className="bi bi-heart flat-card__icon" onClick={() => {}}></i>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
  )
}

export default ModalFlatDetail