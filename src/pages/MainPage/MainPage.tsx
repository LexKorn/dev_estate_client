import React from 'react'

import FilterPanel from '../../components/FilterPanel/FilterPanel'
import List from '../../components/List/List'
import Advertise from '../../components/Advertise/Advertise'
import { IFlat, IAdvertise } from '../../types/types'

import './mainPage.sass'


const MainPage: React.FC = () => {
    const advertises: IAdvertise[] = [];

    return (
        <div className='main-page' >
            <FilterPanel />
            <List
                items={advertises}
                renderItem={(advertise: IAdvertise) => 
                    <Advertise
                        advertise={advertise}
                        onClick={() => {}}
                        // onClick={(contact) => selectContact(contact)}
                        key={advertise.id}
                    />
                } 
            />
        </div>
    )
}

export default MainPage