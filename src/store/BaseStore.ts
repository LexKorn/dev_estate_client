import {makeAutoObservable} from 'mobx'

import { IFlat } from '../types/types';


export default class BaseStore {
    _visibleFlats: IFlat[];
    _priceMin: number;
    _priceMax: number;
    _areaMin: number;
    _areaMax: number;
    _levelMin: number;
    _levelMax: number;

    constructor() {
        this._visibleFlats = [];
        this._priceMin = 150000;
        this._priceMax = 20000000;
        this._areaMin = 30;
        this._areaMax = 120;
        this._levelMin = 3;
        this._levelMax = 25;

        makeAutoObservable(this);
    }

    setVisibleFlats(visibleFlats: IFlat[]) {
        this._visibleFlats = visibleFlats;
    }
    setPriceMin(price: number) {
        this._priceMin = price;
    }
    setPriceMax(price: number) {
        this._priceMax = price;
    }
    setAreaMin(area: number) {
        this._areaMin = area;
    }
    setAreaMax(area: number) {
        this._areaMax = area;
    }
    setLevelMin(level: number) {
        this._levelMin = level;
    }
    setLevelMax(level: number) {
        this._levelMax = level;
    }

    get visibleFlats() {
        return this._visibleFlats;
    }
    get priceMin() {
        return this._priceMin;
    }
    get priceMax() {
        return this._priceMax;
    }
    get areaMin() {
        return this._areaMin;
    }
    get areaMax() {
        return this._areaMax;
    }
    get levelMin() {
        return this._levelMin;
    }
    get levelMax() {
        return this._levelMax;
    }
}