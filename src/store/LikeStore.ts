import { makeAutoObservable } from "mobx"

export default class LikeStore {
    _arrOfId: number[];

    constructor() {
        this._arrOfId = [];

        makeAutoObservable(this);
    }

    setArrOfId(id: number) {
        this._arrOfId.push(id);
    }

    get arrOfId() {
        return this._arrOfId;
    }
}