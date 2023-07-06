import { DetailsDivProps } from '@/shared/types'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'
import cn from 'classnames'
import styles from './UserPanel.module.scss'
interface UserPanelProps extends DetailsDivProps {}

export const UserPanel: FC<UserPanelProps> = ({ className }) => {
  return (
    <div className={cn(styles.userPanel, className)}>
      <Link href={'/profile'}>
        <AiOutlineUser />
      </Link>
      <Link href={'/favorite'}>
        <AiOutlineHeart />
      </Link>
      <Link href={'/cart'}>
        <SlBasket />
      </Link>
    </div>
  )
}
