'use client'
import {
  Burger,
  Container,
  DetailsHeadingProps,
  Input,
  Location,
  Logo,
  Nav,
  Phone,
  UserPanel,
} from '@/shared'
import { cities, menuItems, phones } from './consts'
import { useParams, usePathname } from 'next/navigation'
import styles from './Header.module.scss'
import { BsSearch } from 'react-icons/bs'
import cn from 'classnames'
import { FC, useState } from 'react'

interface HeaderProps extends DetailsHeadingProps {}

export const Header: FC<HeaderProps> = ({ className }) => {
  const pathname = usePathname()
  const { id } = useParams()
  const [value, setValue] = useState('')
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <header className={cn(styles.header, className)}>
      <Container>
        <Burger
          active={menuIsOpen}
          handleMenu={setMenuIsOpen}
          className={styles.burger}
        />
        <div className={styles.top}>
          <div className={styles.left}>
            <Logo className={styles.logo} />
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={cn(styles.input, {
                [styles.focus]: !!value.trim(),
              })}
              placeholder="Найти мебель"
            >
              <BsSearch />
            </Input>
          </div>

          <div className={styles.right}>
            <Location cities={cities} />
            <Phone phones={phones} />
            <UserPanel className={styles.userPanel} />
          </div>
        </div>
        <div className={styles.bottom}>
          <Nav
            className={cn(styles.nav, {
              [styles.open]: menuIsOpen,
            })}
            menuItems={menuItems}
            id={id}
            pathname={pathname}
          />
        </div>
      </Container>
    </header>
  )
}
