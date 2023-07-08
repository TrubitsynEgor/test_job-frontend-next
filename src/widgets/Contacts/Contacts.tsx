import { Button, Container, DetailsDivProps, Title } from '@/shared'
import { FC } from 'react'
import styles from './Contacts.module.scss'
import cn from 'classnames'
import Image from 'next/image'

interface ContactsProps extends DetailsDivProps {}

export const Contacts: FC<ContactsProps> = ({ className }) => {
  return (
    <section className={cn(styles.Contacts, className)}>
      <Container className={styles.container}>
        <div className={styles.callUs}></div>
        <div className={styles.social}></div>
        <Image />
      </Container>
    </section>
  )
}
