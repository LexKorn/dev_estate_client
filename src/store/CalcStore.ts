import {makeAutoObservable} from 'mobx'

export default class CalcStore {
    _price: number;
    _initial: number;
    _months: number;
    _percent: number;

    constructor() {
        this._price = 15000000;
        this._initial = 5000000;
        this._months = 36;
        this._percent = 10;

        makeAutoObservable(this);
    }

    setPrice(price: number) {
        this._price = price;
    }
    setInitial(initial: number) {
        this._initial = initial;
    }
    setMonths(months: number) {
        this._months = months;
    }
    setPercent(percent: number) {
        this._percent = percent;
    }

    get price() {
        return this._price;
    }
    get initial() {
        return this._initial;
    }
    get months() {
        return this._months;
    }
    get percent() {
        return this._percent;
    }
}