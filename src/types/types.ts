export interface IFlat {
    id: number;
    geo_lat: string;
    geo_lon: string;
    region: number;
    building_type: number;
    object_type: number;
    level: number;
    levels: number;
    rooms: number;
    area: number;
    kitchen_area: number;
    price: number;
}

export interface IAdvertise {
    id: number;
    flat: IFlat;
    date: string;
    time: string;
}