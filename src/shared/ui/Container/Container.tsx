import { DetailsDivProps } from '@/shared/types'
import styles from './Container.module.scss'
import cn from 'classnames'

export const Container = ({ children, className }: DetailsDivProps) => {
  return <div className={cn(styles.container, className)}>{children}</div>
}
