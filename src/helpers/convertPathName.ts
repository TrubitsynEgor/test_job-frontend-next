interface IPathObj {
  sofas: string
  chairs: string
}
export const convertPathName = (value: string) => {
  const pathObj = {
    sofas: 'Диваны',
    chairs: 'Стулья',
  } as IPathObj

  for (let k in pathObj) {
    if (k === value) {
      return pathObj[k as keyof IPathObj]
    }
  }
}
