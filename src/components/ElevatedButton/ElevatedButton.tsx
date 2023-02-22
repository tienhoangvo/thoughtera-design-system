import clsx from 'clsx'
import { forwardRef } from 'react'
import Button, { ButtonProps } from '../Button'
import styles from './ElevatedButton.module.css'

export type ElevatedButtonProps = ButtonProps

const ElevatedButton = forwardRef<HTMLButtonElement, ElevatedButtonProps>(
  ({ className, children, ...rest }, ref) => {
    let classes = [styles['elevated-button']]

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

export default ElevatedButton
