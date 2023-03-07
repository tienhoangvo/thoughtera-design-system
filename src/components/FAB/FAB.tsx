import clsx from 'clsx'
import { HTMLAttributes, ReactNode } from 'react'
import ButtonBase from '../ButtonBase'
import styles from './FAB.module.scss'

export type FABProps = HTMLAttributes<HTMLButtonElement> & {
  size?: 'medium' | 'small' | 'large'
  icon?: ReactNode
  color?: 'surface' | 'primary' | 'secondary' | 'tertiary'
  loweredElevation?: boolean
}

const FAB = ({ icon, size = 'medium', className, color, loweredElevation, ...rest }: FABProps) => {
  const classes = [styles['fab'], styles[`size-${size}`], styles[`color-${color}`]]
  console.log({ loweredElevation })
  if (loweredElevation) {
    classes.push(styles['elevation-lowered'])
  }

  if (className) {
    classes.push(className)
  }
  return (
    <ButtonBase className={clsx(classes)} {...rest}>
      <div className="state-overlay" />
      {icon}
    </ButtonBase>
  )
}

export default FAB
