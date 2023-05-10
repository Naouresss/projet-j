import { Role } from './Role';

export class Utilisateur{
    constructor(public id?: number,
                
                public nom_prenom?: string,
                public role?: string,
                public structure_nom?: string,
                public cin?: string,
                public Telephone?: string,
                public mail?: string,
                public password?: string,
           
                public roles?: Role[]
                ){
  
    }
  }