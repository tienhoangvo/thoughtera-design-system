import clsx from 'clsx'
import { forwardRef } from 'react'
import ButtonBase, { type ButtonBaseProps } from '../ButtonBase'
import styles from './ExtendedFAB.module.scss'

export type ExtendedFABProps = ButtonBaseProps & {
  color?: 'primary' | 'surface' | 'secondary' | 'tertiary'
}
const ExtendedFAB = forwardRef<HTMLButtonElement, ExtendedFABProps>(
  ({ className, children, color = 'primary', ...rest }, ref) => {
    const classes = [styles['extended-fab'], styles['color']]

    return <ButtonBase ref={ref} className={clsx(classes)} {...rest}></ButtonBase>
  }
)

export default ExtendedFAB
