import {Produit} from '../produit/produit.component';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';



let p=new Produit("111111","Lait","1");
let result=p.service.getAllProduit();

var _html="";
for(let i in result){
    console.log(result[i].prix);
    _html+=`<div class="col-sm-4 col-lg-4 col-md-4">
                <div class="thumbnail">
                        <img src="${result[i].photo}" alt="">
                        <div class="caption">
                        <h4 class="pull-right">${result[i].prix} €</h4>
                        <h4><a href="#">${result[i].libelle}</a></h4>
                    <p>${result[i].description}.</p>
                </div>
                    <div class="ratings">
                        <p class="pull-right">15 reviews</p>
                        <p>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                        </p>
                    </div>
                </div>
          </div>
        `;
}

document.getElementById("contenu").innerHTML=_html;