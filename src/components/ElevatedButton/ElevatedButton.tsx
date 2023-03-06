import clsx from 'clsx'
import Button, { ButtonProps } from '../Button'
import styles from './ElevatedButton.module.scss'

export type ElevatedButtonProps = ButtonProps

const ElevatedButton = ({ className, children, ...rest }: ElevatedButtonProps) => {
  let classes = [styles['elevated-button']]

  if (className) {
    classes.push(className)
  }
  return (
    <Button className={clsx(classes)} {...rest}>
      {children}
    </Button>
  )
}

ElevatedButton

export default ElevatedButton
