import { Button, Container, DetailsDivProps, Logo } from '@/shared'
import { FC } from 'react'
import styles from './Footer.module.scss'
import cn from 'classnames'
import Link from 'next/link'

interface FooterProps extends DetailsDivProps {}

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn(styles.footer, className)}>
      <Container className={styles.container}>
        <Logo />
        <span>+7 (961) 761-78-26</span>
        <Link href={'tel:+79617617826'}>
          <Button appearance="ghost">Позвонить</Button>
        </Link>
      </Container>
    </footer>
  )
}
