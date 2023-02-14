import { forwardRef, ReactNode, TableHTMLAttributes } from "react";
import styles from './Table.module.css'

export type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  children: ReactNode
}

const Table = forwardRef<HTMLTableElement, TableProps>(({ children, ...rest}, ref) => {

  return (
    <table className={styles.table} ref={ref} {...rest}>
      {children}
    </table>
  )
})

export default Table