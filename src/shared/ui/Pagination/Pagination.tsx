import { Button, DetailsUlProps } from '@/shared'
import { FC } from 'react'
import styles from './Pagination.module.scss'
import cn from 'classnames'
import { HiArrowNarrowRight } from 'react-icons/hi'

interface PaginationProps extends DetailsUlProps {}

export const Pagination: FC<PaginationProps> = ({ className }) => {
  return (
    <ul className={cn(styles.pagination, className)}>
      {[1, 2, 3, 4, '...', 10].map((el, idx) => (
        <li key={idx}>
          <Button className={styles.btn} appearance="link">
            {el}
          </Button>
        </li>
      ))}
      <li>
        <Button appearance="link">
          <HiArrowNarrowRight />
        </Button>
      </li>
    </ul>
  )
}
