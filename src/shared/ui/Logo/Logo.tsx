import Link from 'next/link'
import LogoImg from '/public/Logo.png'
import Image from 'next/image'
import styles from './Logo.module.scss'
import { DetailsLinkProps } from '@/shared/types'
import cn from 'classnames'
import { FC } from 'react'

interface LogoProps extends DetailsLinkProps {}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href={'/'}
      aria-label="Ссылка на главную"
      className={cn(styles.logo, className)}
    >
      <Image src={LogoImg} width={160} height={30} alt="Logo" />
    </Link>
  )
}
