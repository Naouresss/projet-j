import { Utilisateur } from './Utilisateur';

export class Role{
    constructor(public id?: number,
                public name?: string,
                public users?:Utilisateur[]
                ){
  
    }
  }