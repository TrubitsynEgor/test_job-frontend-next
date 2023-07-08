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
    new: 'Новинки',
    armchairs: 'Кресла',
    chairs: 'Стулья',
    mattresses: 'Матрасы',
    puffs: 'Пуфы',
    stock: 'Акции',
    tables: 'Столы',
    beds: 'Кровати',
  } as IPathObj

  for (let k in pathObj) {
    if (k === value) {
      return pathObj[k as keyof IPathObj]
    }
  }
}
