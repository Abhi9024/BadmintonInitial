import { Gender } from "app/models/Gender";

export interface IPlayer{
    name: string;
    playerNumber: number;
    age: number;
    gender: Gender;
    singles: boolean;
    doubles: boolean;
    mixed_doubles: boolean;
    doublesPartnerNum:number;
    mix_doublesPartnerNumb:number;
}

