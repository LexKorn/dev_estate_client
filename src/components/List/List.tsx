import React from 'react';
import { useLocation } from 'react-router-dom';

import { MAIN_ROUTE } from '../../utils/consts';

import './list.sass';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
};


export default function List<T> (props: ListProps<T>) {
    const location = useLocation();
    const isMain = location.pathname === MAIN_ROUTE;

    return (
        <div 
            className="list"
            style={{marginTop: isMain ? "180px" : "30px"}}
            >
            {!props.items.length ? 
                <div className="list__empty">Здесь пока ничего нет...</div>
            :
                props.items.map(props.renderItem)
            }           
        </div>
    );
};