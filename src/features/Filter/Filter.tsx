import cn from 'classnames'
import styles from './Filter.module.scss'
import { FC, useState } from 'react'
import { DetailsDivProps, Title } from '@/shared'

interface FilterProps extends DetailsDivProps {
  title: string
  isShort?: boolean
}

export const Filter: FC<FilterProps> = ({
  className,
  title,
  isShort = false,
}) => {
  if (isShort)
    return (
      <div className={cn(styles.shortFilter, className)}>
        <span className={styles.title}>{title}</span>

        <div className={styles.shortTh}>
          <span>Глубина</span>
          <span>Высота</span>
          <span className={styles.closed}>200 см</span>
          <span className={styles.bold}>150 см</span>
        </div>

        <div className={styles.td}></div>
      </div>
    )
  return (
    <div className={cn(styles.filter, className)}>
      <span className={styles.title}>{title}</span>

      <div className={styles.th}>
        <span>Длина</span>
        <span>Ширина</span>
        <span>Высота</span>
        <span className={styles.closed}>200 см</span>
        <span className={styles.closed}>150 см</span>
        <span className={styles.bold}>50 см</span>
      </div>

      <div className={styles.td}></div>
    </div>
  )
}
