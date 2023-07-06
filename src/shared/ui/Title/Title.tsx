import { DetailsHeadingProps } from '@/shared/types'
import cn from 'classnames'
import { FC } from 'react'
import styles from './Title.module.scss'

interface TitleProps extends DetailsHeadingProps {
  tag?: 'h1' | 'h2' | 'h3'
}

export const Title: FC<TitleProps> = ({ children, tag, className }) => {
  if (tag === 'h2') {
    return (
      <h2 className={cn(styles.title, styles.h2, className)}>{children}</h2>
    )
  }

  if (tag === 'h3') {
    return (
      <h3 className={cn(styles.title, styles.h3, className)}>{children}</h3>
    )
  }

  return <h1 className={cn(styles.title, className)}>{children}</h1>
}
