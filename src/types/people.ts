export interface People {
  name: string;
  gender: string;
  price: number;
  films: string[];
}

export interface Data {
  products: People[];
  isLoading: boolean;
  isError: boolean;
}
