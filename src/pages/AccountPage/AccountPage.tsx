import React, {useState, useContext, useEffect} from 'react'
import {Spinner, Tab, Tabs} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import {observer} from 'mobx-react-lite'

import List from '../../components/List/List'
import FlatCard from '../../components/FlatCard/FlatCard'
import Pageup from '../../components/Pageup/Pageup'
import ModalFlatDetail from '../../components/Modals/ModalFlatDetail'
import TableFlats from '../../components/TableFlats/TableFlats'
import { flatsDB } from '../../utils/flatsDB'
import { IFlat } from '../../types/types'
import { Context } from '../..'

import './accountPage.sass'


const AccountPage: React.FC = observer(() => {
    const [flat, setFlat] = useState<IFlat>({} as IFlat);
    const [flats, setFlats] = useState<IFlat[]>(flatsDB);
    const [likedFlats, setLikedFlats] = useState<IFlat[]>([]);
    const [comparedFlats, setComparedFlats] = useState<IFlat[]>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [arrOfLikeIds, setArrOfLikeIds] = useState<number[]>([]);
    const [arrOfCompareIds, setArrOfCompareIds] = useState<number[]>([]);
    const {like} = useContext(Context);

    useEffect(() => {
        setArrOfLikeIds(like.arrOfLikeIds);
        setArrOfCompareIds(like.arrOfCompareIds);
    }, []);

    useEffect(() => {
        setLikedFlats(flats.filter(flat => arrOfLikeIds.includes(flat.id)));
    }, [arrOfLikeIds]);

    useEffect(() => {
        setComparedFlats(flats.filter(flat => arrOfCompareIds.includes(flat.id)));
    }, [arrOfCompareIds]);

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
            <Tabs
                defaultActiveKey="like"
                id="fill-tab-example"
                className="account__tabs"
                fill
            >
                <Tab eventKey="like" title="Избранное" >
                    <List
                        items={likedFlats}
                        renderItem={(flat: IFlat) => 
                            <FlatCard
                                flat={flat}
                                onClick={(flat) => selectFlat(flat)}
                                key={flat.id}
                            />
                        } 
                    />
                </Tab>
                <Tab eventKey="compare" title="Сравнить" >
                    <TableFlats items={comparedFlats} />
                </Tab>
                <Tab eventKey="write" title="Написать" >
                    
                </Tab>
            </Tabs>
            
            <Pageup />
            <ModalFlatDetail 
                show={visible} 
                onHide={() => setVisible(false)} 
                flat={flat}
            />
        </div>
    )
})

export default AccountPage