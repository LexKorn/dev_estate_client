import React, {useState, useContext, useEffect} from 'react'
import {Spinner, Tab, Tabs, Button} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

import List from '../../components/List/List'
import FlatCard from '../../components/FlatCard/FlatCard'
import Pageup from '../../components/Pageup/Pageup'
import ModalFlatDetail from '../../components/Modals/ModalFlatDetail'
import TableFlats from '../../components/TableFlats/TableFlats'
import { flatsDB } from '../../utils/flatsDB'
import {_transformObjToArr} from '../../utils/calc'
import {MAIN_ROUTE} from '../../utils/consts';
import { IFlat, ILike } from '../../types/types'
import { Context } from '../..'
import {fetchLikes} from '../../http/likesAPI'

import './accountPage.sass'


const AccountPage: React.FC = observer(() => {
    const [flat, setFlat] = useState<IFlat>({} as IFlat);
    const [flats, setFlats] = useState<IFlat[]>(flatsDB);
    const [likedFlats, setLikedFlats] = useState<IFlat[]>([]);
    const [comparedFlats, setComparedFlats] = useState<IFlat[]>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [arrOfLikeIds, setArrOfLikeIds] = useState<ILike[]>([]);
    const [arrOfCompareIds, setArrOfCompareIds] = useState<number[]>([]);
    const {like, user} = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        fetchLikes().then(data => setArrOfLikeIds(data))
    }, []);

    console.log(arrOfLikeIds);
    console.log(_transformObjToArr(arrOfLikeIds));
    

    useEffect(() => {
        // setArrOfLikeIds(like.arrOfLikeIds);
        setArrOfCompareIds(like.arrOfCompareIds);
    }, []);

    useEffect(() => {
        setLikedFlats(flats.filter(flat => _transformObjToArr(arrOfLikeIds).includes(flat.id)));
    }, [arrOfLikeIds]);

    useEffect(() => {
        setComparedFlats(flats.filter(flat => arrOfCompareIds.includes(flat.id)));
    }, [arrOfCompareIds]);

    const selectFlat = (item: IFlat) => {
        setFlat(item);
        setVisible(true);
    };

    const logOut = () => {
        user.setIsAuth(false);
        localStorage.clear();
        navigate(MAIN_ROUTE);
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

            <Button 
                variant={"outline-secondary"} 
                onClick={() => logOut()} 
                className="ms-2 nav-btn"
                >Выйти
            </Button>
            
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