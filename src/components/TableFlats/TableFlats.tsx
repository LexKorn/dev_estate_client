import React, {useState} from 'react'
import {Table} from 'react-bootstrap'

import { IFlat } from '../../types/types'
import { convertNumToStr, convertBuilding } from '../../utils/calc';
import { convertRegion } from '../../utils/regions';
import ModalFlatDetail from '../Modals/ModalFlatDetail';

interface TableFlatsProps {
    items: IFlat[];
};


const TableFlats: React.FC<TableFlatsProps> = ({items}) => {
    const [flat, setFlat] = useState<IFlat>({} as IFlat);
    const [visible, setVisible] = useState<boolean>(false);

    const selectFlat = (item: IFlat) => {
        setFlat(item);
        setVisible(true);
    };

    return (
        <Table striped bordered hover variant="dark" style={{textAlign: 'center'}}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Цена, руб.</th>
                    <th>Комнаты</th>
                    <th>Площадь, м<sup>2</sup></th>
                    <th>Площадь кухни, м<sup>2</sup></th>
                    <th>Этаж</th>
                    <th>Тип здания</th>
                    <th>Тип объекта</th>
                    <th>Регион</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) =>
                    <tr 
                        key={item.id} 
                        style={{cursor: 'pointer'}}
                        onClick={() => selectFlat(item)}
                    >
                        <td>{++i}</td>
                        <td>{convertNumToStr(item.price)}</td>
                        <td>{item.rooms}</td>
                        <td>{item.area}</td>
                        <td>{item.kitchen_area}</td>
                        <td>{item.level} из {item.levels}</td>
                        <td>{convertBuilding(item.building_type)}</td>
                        <td>{item.object_type === 1 ? 'Вторичка' : 'Новостройка'}</td>
                        <td>{convertRegion(item.region)}</td>
                    </tr>
                )}
            </tbody>
            <ModalFlatDetail 
                show={visible} 
                onHide={() => setVisible(false)} 
                flat={flat}
            />
        </Table>
    );
}

export default TableFlats