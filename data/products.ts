import { Product } from '../types';

export const products: Product[] = [
    {
      "id": 1,
      "name": "Aura Laptop Pro",
      "category": "Computers",
      "brand": "TechGen",
      "price": 1299.99,
      "stock": 50,
      "description": "Powerful laptop with a quad-core i7 processor, 16GB RAM, 512GB SSD, and a 14-inch QHD display.",
      "image": "https://picsum.photos/seed/laptop/400/400",
      // FIX: Added missing properties 'rating' and 'images' to conform to the Product type.
      "rating": 4.8,
      "images": ["https://picsum.photos/seed/laptop/400/400", "https://picsum.photos/seed/laptop2/400/400"],
      // FIX: Added missing property 'reviews' to conform to the Product type.
      "reviews": []
    },
    {
      "id": 2,
      "name": "GalaxyFold Z",
      "category": "Mobiles",
      "brand": "Gadgetron",
      "price": 999.99,
      "stock": 100,
      "image": "https://picsum.photos/seed/smartphone/400/400",
      "description": "Feature-rich smartphone with a 6.7-inch foldable screen, 108MP quad camera, 256GB storage, and a 5000mAh battery.",
      // FIX: Added missing properties 'rating' and 'images' to conform to the Product type.
      "rating": 4.5,
      "images": ["https://picsum.photos/seed/smartphone/400/400", "https://picsum.photos/seed/smartphone2/400/400"],
      // FIX: Added missing property 'reviews' to conform to the Product type.
      "reviews": []
    },
    {
      "id": 3,
      "name": "SoundWave Wireless",
      "category": "Audio",
      "brand": "SoundBeats",
      "price": 199.99,
      "stock": 30,
      "image": "https://picsum.photos/seed/headphones/400/400",
      "description": "High-fidelity wireless headphones with active noise cancellation, 30 hours of battery life, and a premium matte finish.",
      // FIX: Added missing properties 'rating' and 'images' to conform to the Product type.
      "rating": 4.7,
      "images": ["https://picsum.photos/seed/headphones/400/400", "https://picsum.photos/seed/headphones2/400/400"],
      // FIX: Added missing property 'reviews' to conform to the Product type.
      "reviews": []
    },
    {
      "id": 4,
      "name": "Chrono Smartwatch",
      "category": "Wearables",
      "brand": "FitTech",
      "price": 249.99,
      "stock": 20,
      "image": "https://picsum.photos/seed/watch/400/400",
      "description": "Smartwatch with a 1.4-inch AMOLED display, GPS, heart rate monitoring, and a sleek titanium case.",
      // FIX: Added missing properties 'rating' and 'images' to conform to the Product type.
      "rating": 4.3,
      "images": ["https://picsum.photos/seed/watch/400/400", "https://picsum.photos/seed/watch2/400/400"],
      // FIX: Added missing property 'reviews' to conform to the Product type.
      "reviews": []
    },
    {
      "id": 5,
      "name": "BassBoom Speaker",
      "category": "Audio",
      "brand": "SoundBeats",
      "price": 129.99,
      "stock": 45,
      "image": "https://picsum.photos/seed/speaker/400/400",
      "description": "Portable bluetooth speaker with deep bass, 360-degree sound, waterproof design, and 24-hour battery life.",
      // FIX: Added missing properties 'rating' and 'images' to conform to the Product type.
      "rating": 4.6,
      "images": ["https://picsum.photos/seed/speaker/400/400", "https://picsum.photos/seed/speaker2/400/400"],
      // FIX: Added missing property 'reviews' to conform to the Product type.
      "reviews": []
    },
    {
      "id": 6,
      "name": "Vision 4K TV",
      "category": "Video",
      "brand": "CineView",
      "price": 1499.99,
      "stock": 15,
      "image": "https://picsum.photos/seed/tv/400/400",
      "description": "65-inch 4K UHD Smart TV with HDR, Dolby Atmos, and a virtually bezel-less screen for an immersive experience.",
      // FIX: Added missing properties 'rating' and 'images' to conform to the Product type.
      "rating": 4.9,
      "images": ["https://picsum.photos/seed/tv/400/400", "https://picsum.photos/seed/tv2/400/400"],
      // FIX: Added missing property 'reviews' to conform to the Product type.
      "reviews": []
    }
  ];