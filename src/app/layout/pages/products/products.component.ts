import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { Product } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductsComponent {
  allProducts : WritableSignal<Product[]> = signal<Product[]>([])
  constructor(private _ProductsService:ProductsService){};
  ngOnInit(): void {
    this._ProductsService.getAllProductsAPI().subscribe({
      next: (res)=> {
        this.allProducts.set(res.data);
      }
    })
    if(typeof localStorage !== 'undefined')
    {
      localStorage.setItem("currentPage" , '/products')
    }

  }

}
