import { IOffer} from "./offers";

export interface IProduct {
    id: number;
    description: string;
    price: number;
    priceDescription: string;
    inventoryQuantity: number;
    image: string;
    offers: IOffer[];
}

export interface IProductCart extends IProduct {
    quantity: number;
}

export const products: IProduct[] = [
    {
      id: 1,
      description: "Gaming mouse",
      price: 439.00,
      priceDescription: "PIX payment in full",
      image: "./assets/mouse-3.jpg",
      inventoryQuantity: 20,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 2,
      description: "UHD monitor",
      price: 1200.50,
      priceDescription: "PIX payment in full",
      image: "./assets/monitor-1.jpg",
      inventoryQuantity: 11,
      offers: [
        {
          id: 1,
          discount: 15,
        },
      ],
    },
    {
      id: 3,
      description: "White LED keyboard",
      price: 149.99,
      priceDescription: "PIX payment in full",
      image: "./assets/keyboard-1.jpg",
      inventoryQuantity: 15,
      offers: [
        {
          id: 1,
          discount: 20,
        },
      ],
    },
    {
      id: 4,
      description: "Red wireless earphones",
      price: 599.99,
      priceDescription: "PIX payment in full",
      image: "./assets/earphone-1.jpg",
      inventoryQuantity: 39,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 5,
      description: "Headphone blue",
      price: 299.99,
      priceDescription: "PIX payment in full",
      image: "./assets/headphone-1.jpg",
      inventoryQuantity: 17,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 6,
      description: "Good headphones",
      price: 399.99,
      priceDescription: "PIX payment in full",
      image: "./assets/headphone-2.jpg",
      inventoryQuantity: 5,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 7,
      description: "1TB HD",
      price: 499.99,
      priceDescription: "PIX payment in full",
      image: "./assets/hd-1.jpg",
      inventoryQuantity: 25,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 8,
      description: "Graphics card combo",
      price: 1849.99,
      priceDescription: "PIX payment in full",
      image: "./assets/graphic-card.jpg",
      inventoryQuantity: 9,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 9,
      description: "Ryzen processor",
      price: 1000,
      priceDescription: "PIX payment in full",
      image: "./assets/processor-1.jpg",
      inventoryQuantity: 18,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 10,
      description: "Good laptop",
      price: 2500,
      priceDescription: "PIX payment in full",
      image: "./assets/laptop-1.jpg",
      inventoryQuantity: 23,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 11,
      description: "Excellent laptop",
      price: 4500,
      priceDescription: "PIX payment in full",
      image: "./assets/laptop-2.jpg",
      inventoryQuantity: 19,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 12,
      description: "Cheap mouse",
      price: 20,
      priceDescription: "PIX payment in full",
      image: "./assets/mouse-1.png",
      inventoryQuantity: 22,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 13,
      description: "Great mouse",
      price: 200,
      priceDescription: "PIX payment in full",
      image: "./assets/mouse-2.jpg",
      inventoryQuantity: 72,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 14,
      description: "Small mouse",
      price: 50,
      priceDescription: "PIX payment in full",
      image: "./assets/mouse-4.jpg",
      inventoryQuantity: 4,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 15,
      description: "Black keyboard with blue LED",
      price: 259.99,
      priceDescription: "PIX payment in full",
      image: "./assets/keyboard-2.jpg",
      inventoryQuantity: 5,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 16,
      description: "Complete desktop",
      price: 2599.99,
      priceDescription: "PIX payment in full",
      image: "./assets/desktop-1.jpg",
      inventoryQuantity: 5,
      offers: [
        {
          id: 1,
          discount: 20,
        },
      ],
    },
    {
      id: 17,
      description: "White bluetooth earphones",
      price: 159.99,
      priceDescription: "PIX payment in full",
      image: "./assets/earphone-2.jpg",
      inventoryQuantity: 5,
      offers: [
        {
          id: 1,
          discount: 20,
        },
      ],
    },
    {
      id: 18,
      description: "Black wireless bluetooth headphones",
      price: 79.99,
      priceDescription: "PIX payment in full",
      image: "./assets/headphone-3.jpg",
      inventoryQuantity: 5,
      offers: [
        {
          id: 1,
          discount: 20,
        },
      ],
    },
    {
      id: 19,
      description: "500GB external HD",
      price: 199.99,
      priceDescription: "PIX payment in full",
      image: "./assets/hd-2.jpg",
      inventoryQuantity: 30,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 20,
      description: "1TB SSD",
      price: 499.99,
      priceDescription: "PIX payment in full",
      image: "./assets/ssd-1.jpg",
      inventoryQuantity: 15,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 21,
      description: "500GB SSD",
      price: 339.99,
      priceDescription: "PIX payment in full",
      image: "./assets/ssd-2.jpg",
      inventoryQuantity: 15,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 22,
      description: "Intel i9 processor",
      price: 809.99,
      priceDescription: "PIX payment in full",
      image: "./assets/processor-2.jpg",
      inventoryQuantity: 18,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 23,
      description: "Apple keyboard",
      price: 559.99,
      priceDescription: "PIX payment in full",
      image: "./assets/keyboard-3.jpg",
      inventoryQuantity: 5,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 24,
      description: "ZIYOU LANG keyboard",
      price: 689.99,
      priceDescription: "PIX payment in full",
      image: "./assets/keyboard-4.jpg",
      inventoryQuantity: 5,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 25,
      description: "OLED monitor",
      price: 689.99,
      priceDescription: "PIX payment in full",
      image: "./assets/monitor-2.jpg",
      inventoryQuantity: 5,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
    {
      id: 26,
      description: "Apple monitor",
      price: 689.99,
      priceDescription: "PIX payment in full",
      image: "./assets/monitor-3.jpg",
      inventoryQuantity: 5,
      offers: [
        {
          id: 1,
          discount: 10,
        },
      ],
    },
]

