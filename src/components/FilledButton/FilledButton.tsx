import clsx from 'clsx'
import { forwardRef } from 'react'
import Button, { type ButtonProps } from '../Button'
import styles from './FilledButton.module.scss'

export type FilledButtonProps = ButtonProps

const FilledButton = forwardRef<HTMLButtonElement, FilledButtonProps>(
  ({ className, children, ...rest }, ref) => {
    let classes = [styles['filled-button']]
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

export default FilledButton
