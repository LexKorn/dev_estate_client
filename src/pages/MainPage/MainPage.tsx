import React, {useState, useContext, useEffect} from 'react'
import {observer} from 'mobx-react-lite'

import FilterPanel from '../../components/FilterPanel/FilterPanel'
import List from '../../components/List/List'
import FlatCard from '../../components/FlatCard/FlatCard'
import Pageup from '../../components/Pageup/Pageup'
import ModalFlatDetail from '../../components/Modals/ModalFlatDetail'
import { IFlat } from '../../types/types'
import { Context } from '../..'

import './mainPage.sass'


const MainPage: React.FC = observer(() => {
    const {base} = useContext(Context);
    const [flat, setFlat] = useState<IFlat>({} as IFlat);
    const [visible, setVisible] = useState<boolean>(false);
    const [priceMin, setPriceMin] = useState<number>(0);
    const [priceMax, setPriceMax] = useState<number>(0);
    const [areaMin, setAreaMin] = useState<number>(0);
    const [areaMax, setAreaMax] = useState<number>(0);
    const [levelMin, setLevelMin] = useState<number>(0);
    const [levelMax, setLevelMax] = useState<number>(0);

    const flats: IFlat[] = [
        {
            id: 1,
            date: '2018-02-19',
            time: '20:00:21',
            geo_lat: '59.8058084',
            geo_lon: '30.376141',
            region: 2661,
            building_type: 1,
            object_type: 1,
            level: 8,
            levels: 10,
            rooms: 3,
            area: 82.6,
            kitchen_area: 10.8,
            price: 6050000,
        },
        {
            id: 2,
            date: '2018-02-27',
            time: '12:04:54',
            geo_lat: '55.683807',
            geo_lon: '37.297405',
            region: 81,
            building_type: 3,
            object_type: 1,
            level: 5,
            levels: 24,
            rooms: 2,
            area: 69.1,
            kitchen_area: 12.0,
            price: 8650000,
        },
        {
            id: 3,
            date: '2018-02-28',
            time: '15:44:00',
            geo_lat: '56.29525',
            geo_lon: '44.061637',
            region: 2871,
            building_type: 1,
            object_type: 1,
            level: 5,
            levels: 9,
            rooms: 3,
            area: 66.0,
            kitchen_area: 10.0,
            price: 4000000,
        },
        {
            id: 4,
            date: '2018-03-01',
            time: '11:24:52',
            geo_lat: '44.996132',
            geo_lon: '39.074783',
            region: 2843,
            building_type: 4,
            object_type: 11,
            level: 12,
            levels: 16,
            rooms: 2,
            area: 38.0,
            kitchen_area: 5.0,
            price: 1850000,
        },
        {
            id: 5,
            date: '2018-03-02',
            time: '21:18:42',
            geo_lat: '55.908253',
            geo_lon: '37.726448',
            region: 81,
            building_type: 1,
            object_type: 1,
            level: 4,
            levels: 5,
            rooms: 1,
            area: 32.0,
            kitchen_area: 6.0,
            price: 3300000,
        },
    ];

    useEffect(() => {
        setPriceMin(base.priceMin);
        setPriceMax(base.priceMax);
        setAreaMin(base.areaMin);
        setAreaMax(base.areaMax);
        setLevelMin(base.levelMin);
        setLevelMax(base.levelMax);
    }, [base.priceMin, base.priceMax, base.areaMin, base.areaMax, base.levelMin, base.levelMax]);

    const selectFlat = (item: IFlat) => {
        setFlat(item);
        setVisible(true);
    };

    return (
        <div className='main-page' >
            <FilterPanel flats={flats} />
            <div className="main-page__check">
                <div>Цена min: {priceMin}</div>
                <div>Цена max: {priceMax}</div>
                <div>Площадь min: {areaMin}</div>
                <div>Площадь max: {areaMax}</div>
                <div>Этаж min: {levelMin}</div>
                <div>Этаж max: {levelMax}</div>
            </div>
            <List
                items={base.visibleFlats}
                renderItem={(flat: IFlat) => 
                    <FlatCard
                        flat={flat}
                        onClick={(flat) => selectFlat(flat)}
                        key={flat.id}
                    />
                } 
            />
            <Pageup />
            <ModalFlatDetail 
                show={visible} 
                onHide={() => setVisible(false)} 
                flat={flat}
            />
        </div>
    )
})

export default MainPage