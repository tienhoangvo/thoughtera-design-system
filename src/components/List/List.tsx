import clsx from "clsx";
import { forwardRef, HTMLAttributes, ReactNode } from "react";
import styles from './List.module.css'



export type ListProps = HTMLAttributes<HTMLUListElement> & {
  children?: ReactNode,
}

const List = forwardRef<HTMLUListElement, ListProps>(({ children, className, ...rest }, ref) => {
  let classes = [styles.list]

  if (className) {
    classes.push(className)
  }

  return (
    <ul ref={ref} className={clsx(classes)} {...rest} >
      {children}
    </ul>
  )
})

export default List