import { Button, Container, DetailsDivProps, Title } from '@/shared'
import { FC } from 'react'
import styles from './Contacts.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import PhoneImg from '/public/content/contscts.png'
import Link from 'next/link'

interface ContactsProps extends DetailsDivProps {}

export const Contacts: FC<ContactsProps> = ({ className }) => {
  return (
    <section className={cn(styles.contacts, className)}>
      <Container className={styles.container}>
        <div className={styles.callUs}>
          <span className={styles.callUsTitle}>
            Остались вопросы? Звоните нам
          </span>
          <span className={styles.callUsPhone}>+7 (961) 761-78-26</span>
          <span className={styles.callUsCaption}>
            Ежедневно с 9:00 до 18:00
          </span>
          <Link href={'tell:+79617617826'}>
            <Button appearance="ghost">Позвонить</Button>
          </Link>
        </div>

        <div className={styles.social}>
          <span className={styles.socialTitle}>
            Присоединяйтесь <span>Вконтакте</span>
          </span>

          <ul className={styles.socialList}>
            <li className={styles.socialItem}>
              Акции и специальные предложения
            </li>
            <li className={styles.socialItem}>Регулярные розыгрыши призов</li>
            <li className={styles.socialItem}>Интерьерные решения</li>
          </ul>

          <Link href={'https://vk.com/mebelrunoru'}>
            <Button appearance="ghost">Вступить в группу</Button>
          </Link>
        </div>

        <Image
          className={styles.img}
          src={PhoneImg}
          alt="Телефон"
          width={240}
          height={370}
        />
      </Container>
    </section>
  )
}
