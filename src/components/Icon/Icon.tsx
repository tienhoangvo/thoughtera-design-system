import { clsx } from 'clsx'
import { forwardRef, HTMLAttributes, useMemo } from 'react'
import styles from './Icon.module.css'

export type IconProps = HTMLAttributes<HTMLSpanElement> & {
  label: string
  size?: 20 | 24 | 40 | 48
}

const Icon = forwardRef<HTMLSpanElement, IconProps>(({ label, size, className }, ref) => {
  const classList = useMemo(() => {
    const defaultClassname = clsx('material-symbols-rounded', styles['icon'], styles[`size-${size}`]);
    return className
      ? clsx(defaultClassname, className)
      : defaultClassname
  }, [className])

  return (
    <span
      ref={ref}
      className={classList}
    >
      {label}
    </span>
  )
})

export default Icon
