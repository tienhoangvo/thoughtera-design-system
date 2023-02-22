import clsx from "clsx"
import { forwardRef, HTMLAttributes, ReactNode } from "react"
import styles from './ListItem.module.css'
export type ListItemProps = HTMLAttributes<HTMLLIElement> & {
  children: ReactNode
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(({ children, className, ...rest }, ref) => {
  const classes = [styles['list-item']]
  if (className) {
    classes.push(className)
  }
  return (
    <li ref={ref} className={clsx(classes)} {...rest}>{children}</li>
  )
})

export default ListItem