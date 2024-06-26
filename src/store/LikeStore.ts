import { makeAutoObservable } from "mobx"

export default class LikeStore {
    _arrOfLikeIds: number[];
    _arrOfCompareIds: number[];
    _visibale: boolean;

    constructor() {
        this._arrOfLikeIds = [];
        this._arrOfCompareIds = [];
        this._visibale = false;

        makeAutoObservable(this);
    }

    setArrOfLikeIds(id: number) {
        this._arrOfLikeIds.push(id);
    }
    setArrOfLikeIdsRemove(id: number) {
        this._arrOfLikeIds = this._arrOfLikeIds.filter(item => item !== id);
    }
    setArrOfCompareIds(id: number) {
        this._arrOfCompareIds.push(id);
    }
    setArrOfCompareIdsRemove(id: number) {
        this._arrOfCompareIds = this._arrOfCompareIds.filter(item => item !== id);
    }
    setVisible(bool: boolean) {
        this._visibale = bool;
    }

    get arrOfLikeIds() {
        return this._arrOfLikeIds;
    }
    get arrOfCompareIds() {
        return this._arrOfCompareIds;
    }
    get visible() {
        return this._visibale;
    }
}