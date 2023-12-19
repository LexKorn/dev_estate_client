import React, {useState, useContext, useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {Spinner} from 'react-bootstrap'

import FilterPanel from '../../components/FilterPanel/FilterPanel'
import List from '../../components/List/List'
import FlatCard from '../../components/FlatCard/FlatCard'
import Pageup from '../../components/Pageup/Pageup'
import ModalFlatDetail from '../../components/Modals/ModalFlatDetail'
import { IFlat } from '../../types/types'
import { Context } from '../..'
import { flatsDB } from '../../utils/flatsDB'
import { fetchFlats } from '../../http/flatsAPI'

import './mainPage.sass'


const MainPage: React.FC = observer(() => {
    const {base} = useContext(Context);
    const [flat, setFlat] = useState<IFlat>({} as IFlat);
    const [flats, setFlats] = useState<IFlat[]>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    // const flats: IFlat[] = flatsDB;
    // console.log(flats);

    useEffect(() => {
        fetchFlats()
            .then(data => setFlats(data.rows))
            .catch(err => alert(err.message))
            .finally(() => setLoading(false))
    }, []);
    

    const selectFlat = (item: IFlat) => {
        setFlat(item);
        setVisible(true);
    };

    if (loading) {
        return (
            <Spinner animation={"border"} variant="light" />
        )
    }

    return (
        <div className='main-page' >
            <FilterPanel flats={flats} />
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