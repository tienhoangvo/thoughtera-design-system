import clsx from 'clsx'
import { forwardRef, ReactNode } from 'react'
import ButtonBase, { type ButtonBaseProps } from '../ButtonBase'
import styles from './IconButton.module.scss'

export type IconButtonProps = ButtonBaseProps & {
  icon: ReactNode
  variant: 'standard' | 'filled' | 'tonal' | 'outlined',
  selected?:boolean
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, variant = 'standard', selected, className, ...rest }, ref) => {
    const classes = [styles['icon-button'], styles[`variant-${variant}`]]

    if (className) {
      classes.push(className)
    }

    if (selected !== undefined) {
      classes.push(styles[`selection-${selected ? 'selected' : 'unselected'}`])
    }

    return (
      <ButtonBase ref={ref} className={clsx(classes)} {...rest}>
        <div className="state-overlay"></div>
        {icon}
      </ButtonBase>
    )
  }
)

export default IconButton
