export interface ProductInterface {
  id?: string;
  title: string;
  description: string;
  price: string;
}

export interface NewProductInterface {
  oldId: string;
  newTitle: string;
  newDescription: string;
  newPrice: string;
}
