import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Bluetooth Speaker",
    price: 1890,
    category: "Audio",
    inStock: true,
    updatedAt: "2025-11-15T11:12:55",
    image: "https://picsum.photos/seed/speaker/160/160",
    description:
      "Portable wireless speaker with rich sound, deep bass and up to 12 hours of battery life.",
  },
  {
    id: 2,
    name: "USB-C Dock",
    price: 990,
    category: "Display",
    inStock: false,
    updatedAt: "2025-11-15T11:12:55",
    image: "https://picsum.photos/seed/dock/160/160",
    description:
      "Compact USB-C dock with HDMI, USB 3.0 and pass-through charging for modern laptops.",
  },
  {
    id: 3,
    name: 'Monitor 34"',
    price: 15888,
    category: "Accessory",
    inStock: false,
    updatedAt: "2025-11-14T09:25:12",
    image: "https://picsum.photos/seed/monitor/160/160",
    description:
      "Ultra-wide 34-inch monitor designed for productive multitasking and immersive entertainment.",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 2398,
    category: "Audio",
    inStock: true,
    updatedAt: "2025-11-13T15:42:08",
    image: "https://picsum.photos/seed/headphones/160/160",
    description:
      "Comfortable over-ear headphones with active noise cancellation and clear calls.",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 4325,
    category: "Keyboard",
    inStock: true,
    updatedAt: "2025-11-12T13:08:44",
    image: "https://picsum.photos/seed/keyboard/160/160",
    description:
      "Tactile mechanical keyboard with hot-swappable switches, RGB lighting and a durable frame.",
  },
  {
    id: 6,
    name: "Webcam Full HD",
    price: 1790,
    category: "Accessory",
    inStock: true,
    updatedAt: "2025-11-10T16:18:32",
    image: "https://picsum.photos/seed/webcam/160/160",
    description:
      "Full HD webcam with automatic light correction for meetings, streaming and calls.",
  },
  {
    id: 7,
    name: "Desk Lamp",
    price: 850,
    category: "Accessory",
    inStock: true,
    updatedAt: "2025-11-09T10:05:21",
    image: "https://picsum.photos/seed/lamp/160/160",
    description:
      "Adjustable LED desk lamp with three color temperatures and touch brightness control.",
  },
  {
    id: 8,
    name: "Gaming Mouse",
    price: 1290,
    category: "Accessory",
    inStock: false,
    updatedAt: "2025-11-08T12:44:19",
    image: "https://picsum.photos/seed/mouse/160/160",
    description:
      "Lightweight precision mouse with programmable buttons and a responsive optical sensor.",
  },
  {
    id: 9,
    name: "Laptop Stand",
    price: 1490,
    category: "Accessory",
    inStock: true,
    updatedAt: "2025-11-06T08:31:10",
    image: "https://picsum.photos/seed/stand/160/160",
    description:
      "Aluminium laptop stand that raises your screen for a more comfortable working posture.",
  },
  {
    id: 10,
    name: "Soundbar Mini",
    price: 2990,
    category: "Audio",
    inStock: false,
    updatedAt: "2025-11-05T14:16:03",
    image: "https://picsum.photos/seed/soundbar/160/160",
    description:
      "Slim desktop soundbar with Bluetooth connectivity and cinema-inspired sound modes.",
  },
];
