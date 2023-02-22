import clsx from 'clsx'
import { forwardRef } from 'react'
import Button, { ButtonProps } from '../Button'
import styles from './TonalButton.module.css'

export type TonalButtonProps = ButtonProps

const TonalButton = forwardRef<HTMLButtonElement, TonalButtonProps>(
  ({ className, children, ...rest }, ref) => {
    let classes = [styles['tonal-button']]

    if (className) {
      classes.push(className)
    }
    return (
      <Button ref={ref} className={clsx(classes)} {...rest}>
        {children}
      </Button>
    )
  }
)

export default TonalButton
