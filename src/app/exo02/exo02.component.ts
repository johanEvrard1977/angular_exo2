import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo02',
  templateUrl: './exo02.component.html',
  styleUrls: ['./exo02.component.css']
})
export class Exo02Component implements OnInit {

  title:string;
  username:string;
  products: Array<{identifiant: number, titre: string, description: string, stockQuantity: number, prix: number}>;
  categorie: Array<{identifiant: number, categorie: string}>;
  public acheter(value:product):void{
    value.stockQuantity--;
  };
  constructor() { }

  ngOnInit(): void {
                this.title="liste de produits";
                this.username="";
                this.products = [
                                {identifiant:1, titre:"orange", description:"fruit orange", stockQuantity:5, prix:2},
                                {identifiant:2, titre:"citron", description:"fruit jaune", stockQuantity:15, prix:25},
                                {identifiant:3, titre:"café", description:"café colombien", stockQuantity:25, prix:25},
                                {identifiant:4, titre:"thé", description:"graine de thé", stockQuantity:55, prix:25},
                                {identifiant:5, titre:"bic", description:"machine pour écrire", stockQuantity:2, prix:25},
                                {identifiant:6, titre:"destop", description:"deboucheur", stockQuantity:20, prix:25},
                                {identifiant:7, titre:"monsieur propre", description:"nettoyant", stockQuantity:215, prix:4},
                                {identifiant:8, titre:"bicarbonate de soude", description:"produits d'entretien", stockQuantity:25, prix:25},
                                {identifiant:9, titre:"télé", description:"télévision", stockQuantity:125, prix:25},
                                {identifiant:10, titre:"seat", description:"voiture", stockQuantity:24, prix:25}
                              ];
                this.categorie = [
                                {identifiant:1, categorie:"fruits et légumes"},
                                {identifiant:2, categorie:"cafés et thés"},
                                {identifiant:3, categorie:"produits d'entretien"},
                                {identifiant:4, categorie:"véhicule"},
                                {identifiant:5, categorie:"média"}
                                ];
                  }

}

class categorie{
  identifiant:number;
  categorie:string;
}


class product{
  identifiant:number;
  titre:string;
  description:string;
  stockQuantity:number;
  prix:number;
  
}