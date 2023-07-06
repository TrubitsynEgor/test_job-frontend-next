import styles from './Location.module.scss'
import { DetailsDivProps } from '@/shared/types'
import cn from 'classnames'
import { FC, useState } from 'react'
import { ICities } from '@/widgets'
import { Button } from '../Button/Button'

interface LocationProps extends DetailsDivProps {
  cities: ICities[]
}

export const Location: FC<LocationProps> = ({ className, cities }) => {
  const [active, setActive] = useState(false)
  const [value, setValue] = useState('Челябинск')

  const handleCityValue = (value: string) => {
    setValue(value)
    setActive(false)
  }

  return (
    <div className={cn(styles.location, className)}>
      <Button appearance="link" onClick={() => setActive((prev) => !prev)}>
        {value}
      </Button>
      <ul
        className={cn(styles.list, {
          [styles.active]: active,
        })}
      >
        {cities.map((city) => (
          <li key={city.id} className={styles.item}>
            <Button
              appearance="link"
              className={styles.btn}
              onClick={() => handleCityValue(city.label)}
            >
              {city.label}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
