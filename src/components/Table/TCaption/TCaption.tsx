import { forwardRef, HTMLAttributes, ReactNode } from "react"
import styles from './TCaption.module.css'

export type TCaptionProps = HTMLAttributes<HTMLTableCaptionElement> & {
  children: ReactNode
}

const TCaption = forwardRef<HTMLTableCaptionElement, TCaptionProps>(({children}, ref) => {
  return (
    <caption ref={ref} className={styles.tcaption}>
      {children}
    </caption>
  )
})

export default TCaption