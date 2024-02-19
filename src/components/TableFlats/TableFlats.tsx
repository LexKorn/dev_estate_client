import React from 'react'
import {Table} from 'react-bootstrap'

import { IFlat } from '../../types/types'
import { convertNumToStr } from '../../utils/calc';
import { convertRegion } from '../../utils/regions';

interface TableFlatsProps {
    items: IFlat[];
    // renderItem: (item: IFlat) => React.ReactNode;
};


const TableFlats: React.FC<TableFlatsProps> = ({items}) => {
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
                {items.map(item =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{convertNumToStr(item.price)}</td>
                        <td>{item.rooms}</td>
                        <td>{item.area}</td>
                        <td>{item.kitchen_area}</td>
                        <td>{item.level} из {item.levels}</td>
                        <td>{item.building_type}</td>
                        <td>{item.object_type === 1 ? 'Вторичка' : 'Новостройка'}</td>
                        <td>{convertRegion(item.region)}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}

export default TableFlats