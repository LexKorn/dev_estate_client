import React, {useState, useEffect, useContext} from 'react';
import {observer} from 'mobx-react-lite'

import { Context } from '../..';
import { convertNumToStr, convertStrToNum } from '../../utils/calc';

import './range.sass';

interface RangeOneValueProps {
    id: string;
    title: string;
    minValue: number;
    maxValue: number;
    step: number;
    init: number;
}


const RangeOneValue: React.FC<RangeOneValueProps> = observer(({id, title, minValue, maxValue, step, init}) => {
    const [value, setValue] = useState(init);
    const [maxRange, setMaxRange] = useState(init);
    const [right, setRight] = useState(init);
    const {calc} = useContext(Context);
    
    const handlerMaxPrice = () => {
        setMaxRange(value);
        setRight(100 - ((value - minValue) * 100 )/ (maxValue - minValue));
    };

    const handlerMaxRange = () => {
        setValue(maxRange);
        setRight(100 - ((maxRange - minValue) * 100 )/ (maxValue - minValue));
    };

    useEffect(() => {
        if (value > maxValue) {
        }
        handlerMaxPrice();

        switch (id) {
            case "price":
                calc.setPrice(value);
                break;
            case "initial":
                calc.setInitial(value);
                break;
            case "years":
                calc.setYears(value);
                break;
            case "percent":
                calc.setPercent(value);
                break;
        }
    }, [value]);

    useEffect(() => {
        handlerMaxRange();
    }, [maxRange]);
    

    return (
        <div className="range__wrapper">
            <div className="range__title">{title}</div>
            <div className="range__value">
                <input 
                    type="text" 
                    className="range__value_input range__value_input-max" 
                    value={convertNumToStr(value)} 
                    onChange={e => {
                        (convertStrToNum(e.target.value) > minValue) ? 
                            (convertStrToNum(e.target.value) > maxValue) ? setValue(maxValue) : setValue(convertStrToNum(e.target.value))
                        : setValue(minValue)
                    }} 
                />
            </div>
            <div className="range__slider">
                <div className="range__slider_progress" style={{left: `0%`, right: `${right}%`}}></div>
            </div>
            <div className="range__range">
                <input 
                    type="range" 
                    className="range__range_input range__range_input-max" 
                    min={minValue} 
                    max={maxValue} 
                    value={maxRange} 
                    step={step} 
                    onChange={e => setMaxRange(+e.target.value)} 
                />
            </div>
        </div>
    );
});

export default RangeOneValue;