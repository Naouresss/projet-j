export class Article{
    constructor(public id?: number,
                public designation_arabe?: string,
                public designation_francais?: string,
                public reference?: string,
                public infosArt?: string,
                public nom_souscategorie?:string,
                
                public produit?:number,
                public quantite?:number,
                public prix?:number

                ){
  
    }
  }