import styles from './Phone.module.scss'
import { DetailsDivProps } from '@/shared/types'
import cn from 'classnames'
import { FC, useState } from 'react'
import { IPhones } from '@/widgets'
import { Button } from '../Button/Button'
import { IoIosArrowForward } from 'react-icons/io'

export const convertPhoneNumber = (value: string) => {
  return value
    .split('')
    .filter((el: any) => !isNaN(el))
    .join('')
    .replaceAll(' ', '')
}

interface PhoneProps extends DetailsDivProps {
  phones: IPhones[]
}

export const Phone: FC<PhoneProps> = ({ className, phones }) => {
  const [active, setActive] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('79000928086')

  const handlePhone = (value: string) => {
    setPhoneNumber(convertPhoneNumber(value))
    setActive(false)
  }

  return (
    <div className={cn(styles.phone, className)}>
      <div className={styles.mainPhone}>
        <a href={`tel:+${phoneNumber}`}>{phoneNumber}</a>
        <Button
          onClick={() => setActive((prev) => !prev)}
          className={styles.btn}
          appearance="link"
        >
          <IoIosArrowForward
            className={cn(styles.svg, {
              [styles.active]: active,
            })}
          />
        </Button>
      </div>
      <ul
        className={cn(styles.list, {
          [styles.active]: active,
        })}
      >
        {phones.map((phone) => (
          <li key={phone.id} className={styles.item}>
            <Button
              className={styles.changePhoneBtn}
              appearance="link"
              onClick={() => handlePhone(phone.label)}
            >
              {phone.label}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
