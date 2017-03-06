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
        return [
            {reference:'11111', libelle: 'Samsung S7', prix:'500',photo:'app/img-product/11111.jpg',description:'Les Galaxy S7 et S7 edge repoussent les limites en associant le meilleur du design et des fonctionnalités. Nous avons créé une expérience encore jamais vue sur smartphone, mais dont vous ne pourrez bientôt plus vous passer.'},
            {reference:'11112', libelle: 'Samsung S6', prix:'300',photo:'app/img-product/11112.jpg',description:'Compatible 4G (débit jusquà 150 Mbit/s),Écran 5 pouces HD IPS et On-Cell,Appareil photo 8 Mégapixels et 5 Mégapixels en frontal,Silhouette fine et élégante'},
            {reference:'11113', libelle: 'Samsung S5', prix:'260',photo:'app/img-product/11113.jpg',description:'Compatibilité LTE 4G Oui,Taille écran 5.1, Système d exploitation Android,Mémoire interne 16 Go'}
        ];
    }
}