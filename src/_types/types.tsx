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
  productImage: string;
  productHeading: string;
  productDescription: string;
};

export interface ProductComponentProps {
  product: ProductsTypes[];
}
