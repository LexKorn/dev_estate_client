import React, {useState, useContext, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import {Helmet} from "react-helmet"

import List from '../../components/List/List'
import FlatCard from '../../components/FlatCard/FlatCard'
import Pageup from '../../components/Pageup/Pageup'
import ModalFlatDetail from '../../components/Modals/ModalFlatDetail'
import { flatsDB } from '../../utils/flatsDB'
import { IFlat } from '../../types/types'

import './accountPage.sass'


const AccountPage: React.FC = () => {
    const [flat, setFlat] = useState<IFlat>({} as IFlat);
    const [flats, setFlats] = useState<IFlat[]>(flatsDB);
    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const selectFlat = (item: IFlat) => {
        setFlat(item);
        setVisible(true);
    };

    if (loading) {
        return (
            <Spinner animation={"border"} variant="warning" style={{marginTop: '100px', marginLeft: '200px'}} />
        )
    }

    return (
        <div className='account'>
            <Helmet>
                <title>Estate | Личный кабинет</title>
                <meta name="description" content="Личный кабинет" />
            </Helmet>
            <List
                items={flats}
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
}

export default AccountPage