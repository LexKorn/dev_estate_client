import React, {useState, useEffect} from 'react';

import './range.sass';

interface RangeOneValueProps {
    title: string;
    minValue: number;
    maxValue: number;
    step: number;
    init: number;
}


const RangeOneValue: React.FC<RangeOneValueProps> = ({title, minValue, maxValue, step, init}) => {
    const [maxPrice, setMaxPrice] = useState(init);
    const [maxRange, setMaxRange] = useState(init);
    const [right, setRight] = useState(init);
    
    const handlerMaxPrice = () => {
        setMaxRange(maxPrice);
        setRight(100 - ((maxPrice - minValue) * 100 )/ (maxValue - minValue));
    };

    const handlerMaxRange = () => {
        setMaxPrice(maxRange);
        setRight(100 - ((maxRange - minValue) * 100 )/ (maxValue - minValue));
    };

    useEffect(() => {
        if (maxPrice > maxValue) {
        }
        handlerMaxPrice();
    }, [maxPrice]);

    useEffect(() => {
        handlerMaxRange();
    }, [maxRange])
    

    return (
        <div className="range__wrapper">
            <div className="range__title">{title}</div>
            <div className="range__value">
                <input 
                    type="number" 
                    className="range__value_input range__value_input-max" 
                    value={maxPrice} 
                    onChange={e => {
                        (+e.target.value > minValue) ? 
                            (+e.target.value > maxValue) ? setMaxPrice(maxValue) : setMaxPrice(+e.target.value)
                        : setMaxPrice(minValue)
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
};

export default RangeOneValue;