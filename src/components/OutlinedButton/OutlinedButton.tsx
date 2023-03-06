import clsx from 'clsx'
import { forwardRef } from 'react'
import Button, { ButtonProps } from '../Button'
import styles from './OutlinedButton.module.scss'

export type OutlinedButtonProps = ButtonProps

const OutlinedButton = forwardRef<HTMLButtonElement, OutlinedButtonProps>(
  ({ className, children, ...rest }, ref) => {
    let classes = [styles['outlined-button']]

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

export default OutlinedButton
