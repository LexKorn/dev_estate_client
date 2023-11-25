import React, {useState, useEffect} from 'react';

import { convertNumToStr, convertStrToNum } from '../../utils/calc';

import './range.sass';

interface RangeTwoValuesProps {
    title: string;
    min: number;
    max: number;
    step: number;
    gap: number;
}


const RangeTwoValues: React.FC<RangeTwoValuesProps> = ({title, min, max, step, gap}) => {
    const [minPrice, setMinPrice] = useState<number>(min);
    const [maxPrice, setMaxPrice] = useState<number>(max);
    const [minRange, setMinRange] = useState<number>(min);
    const [maxRange, setMaxRange] = useState<number>(max);
    const [left, setLeft] = useState<number>(min);
    const [right, setRight] = useState<number>(max);

    const handlerMinPrice = () => {
        if ((maxPrice - minPrice >= gap) && maxPrice <= max) {
            setMinRange(minPrice);            
            setLeft((minPrice / max) * 100);
        }
    };

    const handlerMaxPrice = () => {
        if ((maxPrice - minPrice >= gap) && maxPrice <= max) {
            setMaxRange(maxPrice);
            setRight(100 - (maxPrice / max) * 100);
        }
    };

    const handlerMinRange = () => {
        if (maxRange - minRange < gap) {
            setMinRange(maxRange - gap);
        } else {
            setMinPrice(minRange);
            setLeft((minRange / max) * 100);
        }
    };

    const handlerMaxRange = () => {
        if (maxRange - minRange < gap) {
            setMaxRange(minRange + gap);
        } else {
            setMaxPrice(maxRange);
            setRight(100 - (maxRange / max) * 100);
        }
    };

    useEffect(() => {
        handlerMinPrice();
        handlerMaxPrice();
    }, [minPrice, maxPrice]);

    useEffect(() => {
        handlerMinRange();
        handlerMaxRange();
    }, [minRange, maxRange])
    

    return (
        <div className="range__wrapper">
            <div className="range__title">{title}</div>
            <div className="range__value">
                <input 
                    type="text" 
                    className="range__value_input range__value_input-min" 
                    value={convertNumToStr(minPrice)} 
                    onChange={e => setMinPrice(convertStrToNum(e.target.value))} 
                />
                <input 
                    type="text" 
                    className="range__value_input range__value_input-max" 
                    value={convertNumToStr(maxPrice)} 
                    onChange={e => setMaxPrice(convertStrToNum(e.target.value))} 
                />
            </div>
            <div className="range__slider">
                <div className="range__slider_progress" style={{left: `${left}%`, right: `${right}%`}}></div>
            </div>
            <div className="range__range">
                <input type="range" className="range__range_input range__range_input-min" min={min} max={max} value={minRange} step={step} onChange={e => setMinRange(+e.target.value)} />
                <input type="range" className="range__range_input range__range_input-max" min={min} max={max} value={maxRange} step={step} onChange={e => setMaxRange(+e.target.value)} />
            </div>
        </div>
    );
};

export default RangeTwoValues;