export interface IProductImage {
  id: number
  path: string
}

export interface IProducts {
  id: number
  price: number
  images: IProductImage[]
}
