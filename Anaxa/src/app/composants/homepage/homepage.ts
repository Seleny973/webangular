import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { ProductService } from '../../services/product-service';

@Component({
    selector: 'app-homepage',
    imports: [CommonModule, Header],
    templateUrl: './homepage.html',
    styleUrl: './homepage.scss'
})
export class Homepage {
    // Injecte le service ProductService dans le composant
    constructor(private productService: ProductService) {
    // Le service est maintenant disponible pour être utilisé dans le composant
    }
    products: any = [];

    ngOnInit(){
        // Fait un appel à l'API pour récupérer les produits
        // Angular attend, donc on s'abonne pour obtenir les données
        this.productService.getProducts().subscribe({
            //Next si il y a une réponse de l'API avec les produits
            next: (apiResponse) => {
                console.log('produits récupérés :', apiResponse);
                this.products = apiResponse ;
            },
            //Error si il y a une erreur lors de l'appel à l'API
            error: (error) => {
                console.error('Erreur lors de la récupération des produits :', error);
            }
        });
    }
}
