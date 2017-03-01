let intance;
export class ProduitService {

    static getInstance(){
            if(!intance){
                intance=this;
                return intance;
            }
            return instance;
    }
    getAllProduit() {
        return [{reference: '11111',libelle: 'Lait', prix:'1'},
                {reference:'11112', libelle:'Viande', prix:'3'},
                {reference:'11113',libelle:'Poulet', prix:'3'},
                {reference:'11114', libelle:'Dessert', prix:'2'}];
    }
}