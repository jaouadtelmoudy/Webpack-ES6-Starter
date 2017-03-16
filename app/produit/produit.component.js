import {ProduitService} from './produit.service';
let service;
export class Produit{

     constructor(ref,lib,prix){
         this.reference=ref;
         this.libelle=lib;
         this.prix=prix;
         if(!service){
             this.service=new ProduitService();
         }else{
             this.service=service;
         }
     }
    getReference(){
        return this.reference;
    }
    setReference(ref){
        this.reference=ref;
    }
    getLibelle(){
        return this.libelle;
    }
    setLibelle(lib){
        this.libelle=lib;
    }
    getPrix(){
        return this.prix;
    }
    setPrix(prix){
        this.prix=prix;
    }

}