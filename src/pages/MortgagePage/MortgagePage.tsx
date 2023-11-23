import React, {useContext, useState} from 'react'
import { Button, Container } from 'react-bootstrap'
import {observer} from 'mobx-react-lite'

import RangeOneValue from '../../components/Range/RangeOneValue'
import { Context } from '../..'

import './mortgagePage.sass'


const MortgagePage = observer(() => {
    const {calc} = useContext(Context);
    const [price, setPrice] = useState<number>(0);
    const [initPay, setInitPay] = useState<number>(0);
    const [months, setMonths] = useState<number>(0);
    const [percent, setPercent] = useState<number>(0);
    const [credit, setCredit] = useState<number>(0);
    const [monthPay, setMonthPay] = useState<number>(0);

    const calcMonthPay = (price: number, initPay: number, months: number, percent: number) => {
        const G: number = percent / (100 * 12);
        const cMonthPay = Math.round((price - initPay) * (G / 1 - Math.pow((1 + G), -(months - 1))));
        setMonthPay(cMonthPay);
    };

    return (
        <Container className='mortgage'>
            <div className="mortgage__title">Ипотечный калькулятор</div>
            <div className="mortgage__wrapper">
                <div className="mortgage__wrapper_left">
                    <div className="mortgage__range">
                        <RangeOneValue id="price" title='Стоимость квартиры, руб.' minValue={50000} maxValue={99000000} step={1000} init={15000000} />
                        <RangeOneValue id="initial" title='Первый взнос, руб' minValue={50000} maxValue={99000000} step={1000} init={5000000} />
                        <RangeOneValue id="months" title='Срок кредита, мес.' minValue={1} maxValue={360} step={1} init={36} />
                        <RangeOneValue id="percent" title='Процентная ставка' minValue={0.1} maxValue={30} step={0.1} init={10} />
                    </div>
                    <Button variant='outline-warning' className="mortgage__btn">Расчитать</Button>
                </div>
                <div className="mortgage__wrapper_right">
                    <div className="mortgage__result">Банк:</div>
                    <div className="mortgage__result">Ежемесячный платёж (аннуитетный): {monthPay} руб.</div>
                    <div className="mortgage__result">Кредит: {credit} руб.</div>
                    <div className="mortgage__result">Проценты: {monthPay} руб.</div>
                    <div className="mortgage__result">Кредит + Проценты: {monthPay} руб.</div>
                    <div className="mortgage__result">Переплата: {monthPay} руб.</div>
                    <div className="mortgage__result">Необходимый доход:</div>

                    <div className="mortgage__result">ПРОВЕРКА</div>
                    <div className="mortgage__result">Стоимость квартиры: {calc.price} руб.</div>
                    <div className="mortgage__result">Первый взнос: {calc.initial} руб.</div>
                    <div className="mortgage__result">Срок кредита: {calc.months} руб.</div>
                    <div className="mortgage__result">Процентная ставка: {calc.percent} руб.</div>

                </div>
            </div>
        </Container>
    )
})

export default MortgagePage