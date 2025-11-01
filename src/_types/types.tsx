export interface NavProps {
  path: string;
  navName: string;
}

export type HeroCardProps = {
  cardname: string;
  cardImage: string;
  shopLink: string;
  top: number;
  left: number;
};

export type ProductsTypes = {
  _id: string;
  _creationTime: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock?: number;
};
export interface ProductComponentProps {
  product: ProductsTypes[];
}

export interface independentProduct {
  product: ProductsTypes;
}
