import { DetailsUlProps } from '@/shared/types'
import Link from 'next/link'
import { FC } from 'react'
import cn from 'classnames'
import styles from './Breadсrumbs.module.scss'

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

interface BreadсrumbsProps extends DetailsUlProps {
  pathname: string
}

export const Breadсrumbs: FC<BreadсrumbsProps> = ({ className, pathname }) => {
  const pathArray = pathname.split('/').filter((el) => el)

  if (!pathArray.length) return <></>
  return (
    <ul className={cn(styles.breadсrumbs, className)}>
      <li className={styles.item}>
        <Link className={styles.link} href={'/'}>
          YORCOM
        </Link>
      </li>

      {pathArray.map((el, idx) => (
        <li key={idx} className={styles.item}>
          <Link href={`/${el}`} className={styles.link}>
            {convertPathName(el)}
          </Link>
        </li>
      ))}
    </ul>
  )
}
