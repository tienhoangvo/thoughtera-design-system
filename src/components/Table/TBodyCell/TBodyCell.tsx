import clsx from "clsx";
import { forwardRef, HTMLAttributes, ReactNode, useMemo } from "react";
import styles from './TBodyCell.module.css'

export type TBodyCellProps = HTMLAttributes<HTMLTableCellElement> & {
  children: ReactNode
}

const TBodyCell = forwardRef<HTMLTableCellElement, TBodyCellProps>(({ className, children }, ref) => {

  const classList = useMemo(() => {
    return className ? clsx(styles.tbodycell, className) : styles.tbodycell
  }, [className])

  return (
    <td className={classList} ref={ref}>{children}</td>
    )
})

export default TBodyCell