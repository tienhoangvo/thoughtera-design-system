import clsx from "clsx"
import { forwardRef, HTMLAttributes, ReactNode } from "react"
import styles from './TRow.module.css'

export type TRowProps = HTMLAttributes<HTMLTableRowElement> & {
  children: ReactNode
}

const TRow = forwardRef<HTMLTableRowElement, TRowProps>(({ children, className }, ref) => {
  return (
    <tr ref={ref} className={clsx(styles.trow, className || '')}>{children}</tr>
  )
})

export default TRow