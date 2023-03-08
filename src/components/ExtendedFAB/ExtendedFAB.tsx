import clsx from 'clsx'
import { forwardRef, ReactNode } from 'react'
import ButtonBase, { type ButtonBaseProps } from '../ButtonBase'
import styles from './ExtendedFAB.module.scss'

export type ExtendedFABProps = ButtonBaseProps & {
  color?: 'primary' | 'surface' | 'secondary' | 'tertiary'
  icon: ReactNode
  label: string
}
const ExtendedFAB = forwardRef<HTMLButtonElement, ExtendedFABProps>(
  ({ className, children, color = 'primary', icon, label, ...rest }, ref) => {
    const classes = [styles['extended-fab'], styles[`color-${color}`]]

    return (
      <ButtonBase ref={ref} className={clsx(classes)} {...rest}>
        <div className="state-overlay"></div>
        {icon}
        <span className="label">{label}</span>
      </ButtonBase>
    )
  }
)

export default ExtendedFAB
