import { forwardRef, HTMLAttributes, ReactNode } from "react"
import styles from './TBody.module.css'

export type TBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
  children: ReactNode
}

const TBody = forwardRef<HTMLTableSectionElement, TBodyProps>(({ children, ...rest }, ref) => {
  return (
    <tbody className={styles.tbody} ref={ref} {...rest}>{children}</tbody>
  )
})

export default TBody