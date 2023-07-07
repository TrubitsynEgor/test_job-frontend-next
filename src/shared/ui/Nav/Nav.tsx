import { DetailsDivProps } from '@/shared/types'
import Link from 'next/link'
import { FC, Dispatch, SetStateAction } from 'react'
import cn from 'classnames'
import styles from './Nav.module.scss'
import { UserPanel } from '../UserPanel/UserPanel'

interface IMenuItems {
  id: number
  label: string
  href: string
}

interface NavProps extends DetailsDivProps {
  menuItems: IMenuItems[]
  pathname: string
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Nav: FC<NavProps> = ({
  menuItems,
  pathname,
  id,
  className,
  setMenuIsOpen,
}) => {
  return (
    <nav className={styles.nav}>
      <ul className={cn(styles.list, className)}>
        {menuItems &&
          menuItems.map((item) => (
            <li key={item.id} className={styles.item}>
              <Link
                onClick={() => setMenuIsOpen(false)}
                href={item.href}
                className={cn(styles.link, {
                  [styles.active]: pathname === item.href,
                })}
              >
                {item.label}
              </Link>
            </li>
          ))}

        <UserPanel className={styles.mobileUserPanel} />
      </ul>
    </nav>
  )
}
