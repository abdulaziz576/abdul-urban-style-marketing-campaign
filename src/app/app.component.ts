import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
  category: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  storeName = 'Abdul Store';
  searchTerm = '';
  selectedCategory = 'All';
  cartCount = 0;

  products: Product[] = [
    { id: 'P001', name: 'Aurora Wireless Headphones', description: 'Comfortable over-ear headphones with clear sound for work and study.', price: 84.99, imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80', inStock: true, category: 'Electronics' },
    { id: 'P002', name: 'Nova Smart Watch', description: 'A lightweight everyday smartwatch for activity tracking and notifications.', price: 119.99, imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', inStock: true, category: 'Electronics' },
    { id: 'P003', name: 'Mini Bluetooth Speaker', description: 'Portable speaker with a compact body and balanced sound.', price: 39.99, imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80', inStock: false, category: 'Electronics' },
    { id: 'P004', name: 'Luna Table Lamp', description: 'Warm bedside lamp designed for reading, studying and relaxed evenings.', price: 34.50, imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80', inStock: true, category: 'Home' },
    { id: 'P005', name: 'Soft Knit Cushion', description: 'Textured decorative cushion that adds a soft accent to living spaces.', price: 22.00, imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80', inStock: true, category: 'Home' },
    { id: 'P006', name: 'Ceramic Coffee Mug', description: 'Minimal ceramic mug with a comfortable handle for daily tea or coffee.', price: 14.75, imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80', inStock: true, category: 'Home' },
    { id: 'P007', name: 'Everyday Canvas Backpack', description: 'Spacious casual backpack with room for notebooks and daily essentials.', price: 49.99, imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80', inStock: true, category: 'Accessories' },
    { id: 'P008', name: 'Classic Sunglasses', description: 'Simple sunglasses with a clean shape for an easy everyday look.', price: 27.50, imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80', inStock: false, category: 'Accessories' },
    { id: 'P009', name: 'Relaxed Cotton Hoodie', description: 'Soft casual hoodie with a relaxed fit for cooler days.', price: 45.00, imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80', inStock: true, category: 'Clothing' },
    { id: 'P010', name: 'Essential White Sneakers', description: 'Versatile low-top sneakers designed for casual daily wear.', price: 59.99, imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', inStock: true, category: 'Clothing' },
    { id: 'P011', name: 'Indoor Herb Planter', description: 'Compact planter for growing small herbs near a sunny kitchen window.', price: 18.95, imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80', inStock: true, category: 'Garden' },
    { id: 'P012', name: 'Garden Watering Can', description: 'Lightweight watering can with a narrow spout for controlled watering.', price: 21.25, imageUrl: 'https://images.unsplash.com/photo-1599685315640-9ceab2f581ca?auto=format&fit=crop&w=800&q=80', inStock: true, category: 'Garden' },
    { id: 'P013', name: 'Minimal Desk Notebook', description: 'Hardcover notebook with lined pages for planning, study notes and ideas.', price: 12.50, imageUrl: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80', inStock: true, category: 'Stationery' },
    { id: 'P014', name: 'Fine Tip Pen Set', description: 'Smooth writing pens for notes, journaling and everyday writing.', price: 9.99, imageUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80', inStock: false, category: 'Stationery' }
  ];

  get categories(): string[] {
    return ['All', ...Array.from(new Set(this.products.map(product => product.category)))];
  }

  get filteredProducts(): Product[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.products.filter(product => {
      const categoryMatches =
        this.selectedCategory === 'All' || product.category === this.selectedCategory;

      const textToSearch =
        `${product.name} ${product.description} ${product.category}`.toLowerCase();

      const searchMatches = !term || textToSearch.includes(term);
      return categoryMatches && searchMatches;
    });
  }

  chooseCategory(category: string): void {
    this.selectedCategory = category;
  }

  addToCart(product: Product): void {
    if (product.inStock) {
      this.cartCount += 1;
    }
  }
}
