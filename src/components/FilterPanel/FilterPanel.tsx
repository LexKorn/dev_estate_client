import React, {useState, useContext, useEffect} from 'react'
import {Dropdown, Button} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'

import RangeTwoValues from '../Range/RangeTwoValues'
import { IFlat } from '../../types/types'
import { Context } from '../..'

import './filterPanel.sass'

interface FilterPanelProps {
    flats: IFlat[]
}


const FilterPanel: React.FC<FilterPanelProps> = observer(({flats}) => {
    const {base} = useContext(Context);
    const [classMenu, setClassMenu] = useState<string>('');
    const [toggle, setToggle] = useState<boolean>(false);
    const [checkFirst, setCheckFirst] = useState<boolean>(false);
    const [checkSecond, setCheckSecond] = useState<boolean>(false);
    const [checkStudio, setCheckStudio] = useState<boolean>(false);
    const [checkOne, setCheckOne] = useState<boolean>(false);
    const [checkTwo, setCheckTwo] = useState<boolean>(false);
    const [checkThree, setCheckThree] = useState<boolean>(false);
    const [checkFour, setCheckFour] = useState<boolean>(false);

    useEffect(() => {
        // @ts-ignore
        base.setVisibleFlats(filterRanges(filterRooms(filterObjectType(flats))));
    }, [toggle]);

    const menuHandler = () => {
        classMenu === '' ? setClassMenu('open-menu') : setClassMenu('');
    };

    function filterObjectType(flats: IFlat[]) {
        if ((checkFirst && checkSecond) || (!checkFirst && !checkSecond) ) {
            return flats;
        } else if (checkFirst && !checkSecond) {
            return flats.filter(flat => flat.object_type !== 1);
        } else if (!checkFirst && checkSecond) {
            return flats.filter(flat => flat.object_type === 1);
        }
    }

    function filterRooms(flats: IFlat[]) {
        const arr: IFlat[] = [];
        const studioRoom: number = checkStudio ? -1 : 0;
        const oneRoom: number = checkOne ? 1 : 0;
        const twoRooms: number = checkTwo ? 2 : 0;
        const threeRooms: number = checkThree ? 3 : 0;
        const fourRooms: number = checkFour ? 4 : 0;

        if ((checkStudio && checkOne && checkTwo && checkThree && checkFour) || (!checkStudio && !checkOne && !checkTwo && !checkThree && !checkFour) ) {
            return flats;
        } else {
            arr.push(...flats.filter(flat => flat.rooms === studioRoom));
            arr.push(...flats.filter(flat => flat.rooms === oneRoom));
            arr.push(...flats.filter(flat => flat.rooms === twoRooms));
            arr.push(...flats.filter(flat => flat.rooms === threeRooms));
            arr.push(...flats.filter(flat => flat.rooms === fourRooms));
        }
        return arr;
    }

    function filterRanges(flats: IFlat[]) {
        let arr: IFlat[] = [];
        arr = flats.filter(flat => flat.price >= base.priceMin && flat.price <= base.priceMax);
        arr = arr.filter(flat => flat.area >= base.areaMin && flat.area <= base.areaMax);
        arr = arr.filter(flat => flat.level >= base.levelMin && flat.level <= base.levelMax);
        return arr;
    }

    return (
        <div className='filter-panel'>
            <div className={"filter-panel__burger" + ' ' + classMenu} onClick={() => menuHandler()}>
                <Button variant='secondary' className="filter-panel__burger_btn">{classMenu === '' ? 'Скрыть' : 'Фильтр'}</Button>
            </div>

            <div className={"filter-panel__wrapper"  + ' ' + classMenu}>
                <div className="filter-panel__checks">
                    <Dropdown className="filter-panel__checks_region">
                        <Dropdown.Toggle variant={"outline-secondary"}>Регион</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item >
                                {/* // onClick={() => setReaction(true)}> */}
                                    Московский
                            </Dropdown.Item>
                            <Dropdown.Item >
                                {/* // onClick={() => setReaction(false)}> */}
                                    Питерский
                            </Dropdown.Item>
                            <Dropdown.Item >
                                {/* // onClick={() => setReaction(false)}> */}
                                    Любой
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="filter-panel__checks_type">
                        <input type="checkbox" id="check-first" checked={checkFirst} onChange={() => setCheckFirst(!checkFirst)} />
                        <label htmlFor="check-first">Новостройка</label>
                        <input type="checkbox" id="check-second" checked={checkSecond} onChange={() => setCheckSecond(!checkSecond)} />
                        <label htmlFor="check-second">Вторичка</label>
                    </div>
                    <div className="filter-panel__checks_rooms">
                        <input type="checkbox" id="check-studio" checked={checkStudio} onChange={() => setCheckStudio(!checkStudio)} />
                        <label htmlFor="check-studio">Студия</label>
                        <input type="checkbox" id="check-one" checked={checkOne} onChange={() => setCheckOne(!checkOne)} />
                        <label htmlFor="check-one">1</label>
                        <input type="checkbox" id="check-two" checked={checkTwo} onChange={() => setCheckTwo(!checkTwo)} />
                        <label htmlFor="check-two">2</label>
                        <input type="checkbox" id="check-three" checked={checkThree} onChange={() => setCheckThree(!checkThree)} />
                        <label htmlFor="check-three">3</label>
                        <input type="checkbox" id="check-four" checked={checkFour} onChange={() => setCheckFour(!checkFour)} />
                        <label htmlFor="check-four">4+</label>
                    </div>
                    <Button variant='outline-warning' className="filter-panel__checks_btn" onClick={() => setToggle(!toggle)}>Показать</Button>
                </div>
                <div className="filter-panel__range">
                    <RangeTwoValues
                        id="price-main"
                        title='Цена, руб.' 
                        min={100000} 
                        max={50000000} 
                        step={10000} 
                        gap={10000} 
                    />
                    <RangeTwoValues
                        id="area"
                        title='Площадь, м2' 
                        min={15} 
                        max={300} 
                        step={5} gap={5} 
                    />
                    <RangeTwoValues
                        id="level"
                        title='Этаж' 
                        min={1} 
                        max={33} 
                        step={1} 
                        gap={0} 
                    />
                </div>
                <Button variant='outline-warning' className="filter-panel__btn" onClick={() => setToggle(!toggle)}>Показать</Button>
            </div>
        </div>
    )
})

export default FilterPanel