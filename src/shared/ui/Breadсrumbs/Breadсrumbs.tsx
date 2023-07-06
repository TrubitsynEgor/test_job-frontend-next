import { DetailsUlProps } from '@/shared/types'
import Link from 'next/link'
import { FC } from 'react'
import cn from 'classnames'
import styles from './Breadсrumbs.module.scss'
import { convertPathName } from '@/helpers'

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
