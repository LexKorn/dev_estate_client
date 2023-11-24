import React, {useContext, useEffect, useState} from 'react'
import { Button, Container } from 'react-bootstrap'
import {observer} from 'mobx-react-lite'

import RangeOneValue from '../../components/Range/RangeOneValue'
import { Context } from '../..'
import { convertNumToStr, convertStrToNum } from '../../utils/calc' 

import './mortgagePage.sass'


const MortgagePage = observer(() => {
    const {calc} = useContext(Context);
    const [income, setIncome] = useState<number>(0);
    const [percentPay, setPercentPay] = useState<number>(0);
    const [credit, setCredit] = useState<number>(0);
    const [monthPay, setMonthPay] = useState<number>(0);

    const calcMonthPay = (price: number, initial: number, years: number, percent: number) => {
        const G: number = percent / (100 * 12);
        const cMonthPay = Math.round((price - initial) * (G / (1 - Math.pow((1 + G), -(years * 12 - 1)))));
        setMonthPay(cMonthPay);
    };

    useEffect(() => {
        calcMonthPay(calc.price, calc.initial, calc.years, calc.percent);
        setCredit(calc.price - calc.initial);
    }, [calc.price, calc.initial, calc.years, calc.percent]);

    useEffect(() => {
        setPercentPay(monthPay * calc.years * 12 - (calc.price - calc.initial));
        setIncome(Math.round(monthPay * 0.4));
    }, [monthPay]);

    return (
        <Container className='mortgage'>
            <div className="mortgage__title">Ипотечный калькулятор</div>
            <div className="mortgage__wrapper">
                <div className="mortgage__wrapper_left">
                    <div className="mortgage__range">
                        <RangeOneValue id="price" title='Стоимость квартиры, руб.' minValue={50000} maxValue={99000000} step={10000} init={15000000} />
                        <RangeOneValue id="initial" title='Первый взнос, руб' minValue={50000} maxValue={99000000} step={10000} init={5000000} />
                        <RangeOneValue id="years" title='Срок кредита, лет' minValue={1} maxValue={30} step={1} init={10} />
                        <RangeOneValue id="percent" title='Процентная ставка' minValue={0.1} maxValue={30} step={0.1} init={10} />
                    </div>
                    <Button variant='outline-warning' className="mortgage__btn">Расчитать</Button>
                </div>
                <div className="mortgage__wrapper_right">
                    <div className="mortgage__result">Ежемесячный платёж (аннуитетный): {convertNumToStr(monthPay)} руб.</div>
                    <div className="mortgage__result">Кредит: {convertNumToStr(credit)} руб.</div>
                    <div className="mortgage__result">Проценты: {convertNumToStr(percentPay)} руб.</div>
                    <div className="mortgage__result">Необходимый доход: {convertNumToStr(income)} руб/мес</div>
                </div>
            </div>
        </Container>
    )
})

export default MortgagePage