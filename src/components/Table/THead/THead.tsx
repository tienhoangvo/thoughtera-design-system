import { forwardRef, HTMLAttributes, ReactNode } from "react";
import styles from './THead.module.css'

export type THeadProps = HTMLAttributes<HTMLTableSectionElement> & {
  children: ReactNode
}

const THead = forwardRef<HTMLTableSectionElement, THeadProps>(({children, ...rest}, ref) => {
  return <thead ref={ref} {...rest} className={styles.THead}>
    {children}
  </thead>
})

export default THead