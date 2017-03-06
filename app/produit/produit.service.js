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
            {reference:'11113', libelle: 'Samsung S5', prix:'260',photo:'app/img-product/11113.jpg',description:'Compatibilité LTE 4G Oui,Taille écran 5.1, Système d exploitation Android,Mémoire interne 16 Go'},

            {reference:'11114', libelle: 'Iphone 5s', prix:'260',photo:'app/img-product/11114.jpg',description:'Taille d écran : 4,Type : Apple A7 4G,Résolution du capteur : 8 mégapixels,Capacité de la mémoire interne : 16 Go,Système d exploitation : iOS 7   Composants intégrés : Caméra arrière, caméra avant, enregistreur vocal, navigation Fonctions du téléphone : Téléphone à haut parleur, commande vocale, compteur        d appels, téléconférence, numérotation vocale, vibreur'},
            {reference:'11115', libelle: 'Iphone 6s', prix:'260',photo:'app/img-product/11115.jpg',description:'Taille d écran : 4.7,Type : Apple A9 4G,Résolution du capteur : 12 mégapixels,Capacité de la mémoire interne : 16 Go,Système d exploitation : iOS 9  Composants intégrés : Caméra arrière, caméra avant, lecteur audio, enregistreur vocal, haut-parleurs stéréo, navigation Fonctions du téléphone : Téléphone à haut parleur, commande vocale, compteur d appels, téléconférence, mode avion, numérotation vocale, vibreur'},
            {reference:'11116', libelle: 'Iphone 7' , prix:'260',photo:'app/img-product/11116.jpg',description:'Trois modèles : iPhone 7S, 7S Plus et X ou (Anniversary),Les iPhone 7S conserveraient le design de l iPhone 7, seul le modèle X aurait droit aux vraies nouveautés        Ces vraies nouveautés seraient : écran OLED bord à bord, design en verre, reconnaissance faciale,L iPhone X pourrait coûter plus de 1000 dollars.  Comme d habitude, les sorties auront lieu courant septembre. '},
        ];
    }
}