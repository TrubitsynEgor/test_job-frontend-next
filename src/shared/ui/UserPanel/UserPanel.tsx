import { DetailsDivProps } from '@/shared/types'
import Link from 'next/link'
import { FC } from 'react'

interface UserPanelProps extends DetailsDivProps {}

const UserPanel: FC<UserPanelProps> = ({ className }) => {
  return (
    <div>
      <Link href={'/profile'}></Link>
      <Link href={'/favorite'}></Link>
      <Link href={'/cart'}></Link>
    </div>
  )
}

export default UserPanel
