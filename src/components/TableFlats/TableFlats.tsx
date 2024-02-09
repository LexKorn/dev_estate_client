import React from 'react'
import {Table} from 'react-bootstrap'

import { IFlat } from '../../types/types'

interface TableFlatsProps {
    items: IFlat[];
    // renderItem: (item: IFlat) => React.ReactNode;
};


const TableFlats: React.FC<TableFlatsProps> = ({items}) => {
    return (
        <Table striped bordered hover variant="dark">
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
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default TableFlats