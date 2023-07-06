import styles from './Button.module.scss'
import cn from 'classnames'
import { IoIosArrowForward } from 'react-icons/io'
import { FC } from 'react'
import { DetailsBtnProps } from '@/shared/types'

interface ButtonProps extends DetailsBtnProps {
  appearance: 'primary' | 'ghost' | 'link'
  arrow?: 'right' | 'down' | 'none'
}

export const Button: FC<ButtonProps> = ({
  children,
  appearance,
  arrow = 'none',
  className,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
        [styles.link]: appearance === 'link',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
          })}
        >
          <IoIosArrowForward />
        </span>
      )}
    </button>
  )
}
