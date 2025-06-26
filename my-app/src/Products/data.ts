
export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: string;
  features: string[];
}
export const productData: Product[] =[
  {
    id: 1,
    name: 'Galaxy S21',
    brand: 'Samsung',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIxGwpUAX0ErdC6EP5WhfOeg2ctRKuX48UFQhGs4l_soKzjYdPmdurOjSW5qZkyDx97Jp0IrnM3aTByokXLVAn0bx8wQfLWDw85Zz1CKtr8Da8B-0BjA2xDJQ-7VeRf9AvHRYthg&usqp=CAc',
    price: '$799',
    features: ['6.2" Display', '4000mAh Battery', 'Triple Camera']
  },
  {
    id: 2,
    name: 'iPhone 13',
    brand: 'Apple',
    image: 'https://vsprod.vijaysales.com/media/catalog/product/1/9/193008-image1_4.jpg?optimize=medium&fit=bounds&height=500&width=500',
    price: '$999',
    features: ['6.1" Display', 'A15 Bionic', 'Dual Camera']
  },
  {
    id: 3,
    name: 'Pixel 6',
    brand: 'Google',
    image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724266770/Croma%20Assets/Communication/Mobiles/Images/309156_0_bv3k1x.png?tr=w-640',
    price: '$599',
    features: ['6.4" Display', 'Tensor Chip', 'Dual Camera']
  },
  {
    id: 4,
    name: 'OnePlus 9',
    brand: 'OnePlus',
    image: 'https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9/Arcticsky_9.png',
    price: '$729',
    features: ['6.55" Display', '120Hz AMOLED', 'Snapdragon 888']
  },
  {
    id: 5,
    name: 'Xiaomi Mi 11',
    brand: 'Xiaomi',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRKlvXgAdIvn3jbo940vhegNJZOlhhKqS4zDOxNyqoK2Y5A9L7zCrkREQJvIZYOuIDJgGrGi7RL3IX3EtIpSMcQWRKpyjUHlm4Axs54nRMTBFv8TCJu0tYFRw',
    price: '$699',
    features: ['6.81" AMOLED', '4600mAh Battery', '108MP Camera']
  },
  {
    id: 6,
    name: 'Sony Xperia 5',
    brand: 'Sony',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRQoVWJVzuHn9f4DZTF9bzWrIovxXdrQ7mZ403YY17cWpKQbKXWjaVXy4ol8SPYvRGqvxsuxNAUQIBPLgdFGGXENly_S_237xAX1sPJCc2ryfgEOmEHSge-',
    price: '$899',
    features: ['6.1" OLED', 'Snapdragon 865', 'Triple Lens Camera']
  },
  {
    id: 7,
    name: 'Motorola Edge+',
    brand: 'Motorola',
    image: 'https://motorolain.vtexassets.com/arquivos/ids/159359-1200-auto?width=1200&height=auto&aspect=true',
    price: '$799',
    features: ['6.7" OLED', '5000mAh Battery', '108MP Camera']
  },
  {
    id: 8,
    name: 'Asus ROG Phone 5',
    brand: 'Asus',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRDNBwXfr_HfHWxwx-vNvmxLD0N4j5D_dKMor8ZEw1eewXovlQhOqIXc3ENhc4fESITVXpvIKkx6uypvcSd_OsEyyhH2AYV9wJ3Q0qXTA2F3ODs7maJxuW_Sw',
    price: '$999',
    features: ['6.78" AMOLED', '6000mAh Battery', 'Gaming Triggers']
  }
];