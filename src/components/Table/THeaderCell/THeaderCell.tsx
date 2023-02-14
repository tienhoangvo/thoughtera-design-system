import { forwardRef, ReactNode, ThHTMLAttributes } from "react";
import styles from './THeaderCell.module.css'

export type THeaderCellProps = ThHTMLAttributes<HTMLTableCellElement> & {
  children: ReactNode
}

const THeaderCell = forwardRef<HTMLTableCellElement, THeaderCellProps>(({ children, ...rest }, ref) => {
  return (
    <th ref={ref} className={styles.THeaderCell} {...rest} >{children}</th>
  )
})

export default THeaderCell