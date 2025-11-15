
export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  description: string;
  image: string;
  rating: number;
  images: string[];
  reviews: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}