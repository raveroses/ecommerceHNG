export interface NavProps {
  path: string;
  navName: string;
}

export type HeroCardProps = {
  cardname: string;
  cardImage: string;
  shopLink: string;
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
  quantity?: number;
  totalPrice?: number;
};
export interface ProductComponentProps {
  product: ProductsTypes[];
}

export interface independentProduct {
  product: ProductsTypes;
}

export interface ContextType {
  cart: ProductsTypes[];
  addToCart: (product: ProductsTypes, quantity: number) => void;
  isCart: boolean;
  handleOnCart: () => void;
  handleRemoveAllCart: () => void;
  handleNavBar: () => void;
  isNavBar: boolean;
}

export interface CheckOutDetail {
  userName: string;
  email: string;
  address: string;
  phoneNumber: string;
  zipcode: string;
  postcode: number;
  country: string;
  eMoney: boolean;
  cashOndelivery: boolean;
}

export interface AllDetail extends ProductsTypes, CheckOutDetail {}
