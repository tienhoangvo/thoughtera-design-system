import { clsx } from 'clsx'
import styles from './Icon.module.css'

export type IconProps = {
  label: string
  size: 20 | 24 | 40 | 48
}

const Icon = ({ label, size = 24 }: IconProps) => {
  return (
    <span
      className={clsx(
        'material-symbols-rounded',
        styles['icon'],
        styles[`size-${size}`]
      )}
    >
      {label}
    </span>
  )
}

export default Icon
