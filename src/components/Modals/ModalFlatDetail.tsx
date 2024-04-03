import React, {useContext} from 'react'
import {Modal, Tab, Tabs} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'

import { IFlat } from '../../types/types'
import { Context } from '../..'
import { textDate, convertNumToStr, convertBuilding } from '../../utils/calc'
import {createLike, deleteLike} from '../../http/likesAPI'
import { room_1, room_2, room_3, room_4, room_s, room_1_plan, room_2_plan, room_3_plan, room_4_plan, room_s_plan, room_1_photo, room_2_photo, room_3_photo, room_4_photo, room_s_photo, room_photo_1, room_photo_2, room_photo_3, room_photo_4 } from '../../assets/img';
import Slider from '../Slider/Slider';

import './modalFlatDetail.sass'

interface ModalFlatDetailProps {
    show: boolean;
    onHide: () => void;
    flat: IFlat;
};

const url = (lat: number, lon: number): string => {
    return `https://geotree.ru/coordinates?lat=${lat}&lon=${lon}&z=10&mlat=${lat}&mlon=${lon}&c=`;
}

const arrOfImg: string[] = [room_photo_1, room_photo_2, room_photo_3, room_photo_4];


const ModalFlatDetail: React.FC<ModalFlatDetailProps> = observer(({show, onHide, flat}) => {
    const {like} = useContext(Context);

    const addLike = () => {
        // like.setArrOfLikeIds(flat.id)
        createLike(flat.id);
    }

    const addCompare = () => {
        like.setArrOfCompareIds(flat.id)
    }

    const removeLike = () => {
        deleteLike(flat.id)
        // alert('Квартира удалена из Избранного')
        onHide()
    }
    
    const removeCompare = () => {alert('Эта квартира уже в Сравнении')}

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
                                <Slider photos={arrOfImg} />
                                {/* {flat.rooms === 1 ?
                                    <img src={room_1_photo} alt="1-room" />
                                    : flat.rooms === 2 ?
                                    <img src={room_2_photo} alt="2-rooms" />
                                    : flat.rooms === 3 ?
                                        <img src={room_3_photo} alt="3-rooms" />
                                    : flat.rooms === 4 ?
                                        <img src={room_4_photo} alt="4-rooms" />
                                    :
                                    <img src={room_s_photo} alt="studio" />
                                } */}
                            </Tab>
                        </Tabs>
                    </div>
                    <div className="flat-detail__info">
                        <div className="flat-detail__info_flat">{flat.rooms === -1 ? 'Студия' : flat.rooms + '-комнатная'} {flat.area} м<sup>2</sup></div>
                        <div className="flat-detail__info_price">{convertNumToStr(flat.price)} руб.</div>
                        <div className="flat-detail__info_subprice">или {convertNumToStr(Math.ceil(flat.price / flat.area))} за м<sup>2</sup></div>
                        <div className="flat-detail__info_info">Этаж: {flat.level} из {flat.levels}</div>
                        <div className="flat-detail__info_info">Площадь кухни: {flat.kitchen_area} м<sup>2</sup></div>
                        <div className="flat-detail__info_info">Тип здания: {convertBuilding(flat.building_type)}</div>
                        <div className="flat-detail__info_info">{flat.object_type === 1 ? 'Вторичка' : 'Новостройка'}</div>
                        <div className="flat-detail__info_icons">
                            {like.arrOfLikeIds.length && like.arrOfLikeIds.includes(flat.id) ?
                                <i className="bi bi-heart-fill flat-detail__info_icons-item" onClick={removeLike} data-tooltip="удалить из Избранного"></i>
                                :
                                <i className="bi bi-heart flat-detail__info_icons-item" onClick={addLike} data-tooltip="в Избранное"></i>
                            }
                            {like.arrOfCompareIds.length && like.arrOfCompareIds.includes(flat.id) ?
                                <i className="bi bi-card-checklist flat-detail__info_icons-item" onClick={removeCompare} data-tooltip="Удалить из сравнения"></i>
                                :
                                <i className="bi bi-list-task flat-detail__info_icons-item" onClick={addCompare} data-tooltip="Сравнить"></i>
                            }
                            <i className="bi bi-basket2 flat-detail__info_icons-item" onClick={() => {alert('Данная функция пока в разработке...')}} data-tooltip="Забронировать"></i>
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
})

export default ModalFlatDetail