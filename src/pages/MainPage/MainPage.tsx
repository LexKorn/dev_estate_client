import React from 'react'

import FilterPanel from '../../components/FilterPanel/FilterPanel'
import List from '../../components/List/List'
import FlatCard from '../../components/FlatCard/FlatCard'
import { IFlat } from '../../types/types'

import './mainPage.sass'


const MainPage: React.FC = () => {
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

    return (
        <div className='main-page' >
            <FilterPanel />
            <List
                items={flats}
                renderItem={(flat: IFlat) => 
                    <FlatCard
                        flat={flat}
                        onClick={() => {}}
                        // onClick={(contact) => selectContact(contact)}
                        key={flat.id}
                    />
                } 
            />
        </div>
    )
}

export default MainPage