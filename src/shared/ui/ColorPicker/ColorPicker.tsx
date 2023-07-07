import { DetailsUlProps, IColor } from '@/shared/types'
import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './ColorPicker.module.scss'
import Image from 'next/image'

interface ColorPickerProps extends DetailsUlProps {
  colors: IColor[]
}

export const ColorPicker: FC<ColorPickerProps> = ({ className, colors }) => {
  const [currentColor, setCurrentColor] = useState(colors[0].label)
  return (
    <>
      <span>{currentColor}</span>
      <ul className={cn(styles.colorPicker)}>
        {colors.map((color) => (
          <li key={color.id} aria-label={`Выбрать цвет ${color.label}`}>
            <Image
              src={color.image}
              alt="color"
              width={15}
              height={15}
              onClick={() => setCurrentColor(color.label)}
              className={cn(styles.img, {
                [styles.active]: currentColor === color.label,
              })}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
