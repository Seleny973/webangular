import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss']
})
export class Admin {
  products: any[] = [];
  loading = false;
  constructor(private productService: ProductService) {}

  ngOnInit(){
    this.load();
  }

  load(){
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (res: any) => { this.products = res; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  deleteProduct(id: number){
    if (!confirm('Supprimer ce produit ?')) return;
    this.productService.deleteProduct(id).subscribe({
      next: () => { this.load(); },
      error: (e) => { console.error('Erreur suppression', e); }
    });
  }
}
