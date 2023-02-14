import { forwardRef, HTMLAttributes, ReactNode } from "react";
import styles from './TBodyCell.module.css'

export type TBodyCellProps = HTMLAttributes<HTMLTableCellElement> & {
  children: ReactNode
}

const TBodyCell = forwardRef<HTMLTableCellElement, TBodyCellProps>(({children}) => {
  return (
    <td className={styles.tbodycell}>{children}</td>
    )
})

export default TBodyCell