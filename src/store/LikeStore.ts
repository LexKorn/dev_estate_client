import { makeAutoObservable } from "mobx"

export default class LikeStore {
    _arrOfLikeIds: number[];
    _arrOfCompareIds: number[];

    constructor() {
        this._arrOfLikeIds = [];
        this._arrOfCompareIds = [];

        makeAutoObservable(this);
    }

    setArrOfLikeIds(id: number) {
        this._arrOfLikeIds.push(id);
    }
    setArrOfCompareIds(id: number) {
        this._arrOfCompareIds.push(id);
    }

    get arrOfLikeIds() {
        return this._arrOfLikeIds;
    }
    get arrOfCompareIds() {
        return this._arrOfCompareIds;
    }
}