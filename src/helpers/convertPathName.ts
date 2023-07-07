interface IPathObj {
  sofas: string
  products: string
}
export const convertPathName = (value: string) => {
  const el = value.split('/')[0]
  if (+el) {
    return 'Имя дивана'
  }
  const pathObj = {
    sofas: 'Диваны',
    products: 'Продукция',
  } as IPathObj

  for (let k in pathObj) {
    if (k === value) {
      return pathObj[k as keyof IPathObj]
    }
  }
}
