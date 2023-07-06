import { DetailsBtnProps } from '@/shared/types'
import { FC, Dispatch, SetStateAction } from 'react'
import cn from 'classnames'
import styles from './Burger.module.scss'
import { Button } from '../Button/Button'

interface BurgerProps extends DetailsBtnProps {
  active: boolean
  handleMenu: Dispatch<SetStateAction<boolean>>
}

export const Burger: FC<BurgerProps> = ({ className, active, handleMenu }) => {
  return (
    <Button
      onClick={() => handleMenu((prev) => !prev)}
      appearance="link"
      className={cn(styles.burger, className)}
    >
      <span
        className={cn(styles.line, {
          [styles.active]: active,
        })}
      ></span>
    </Button>
  )
}
