import { ReactNode } from "react"


export type BadgeProps = {
  children?: ReactNode,
  label?: string
}

const Badge = ({ children, label } : BadgeProps) => {
  return (
    <span>
      {children}
      <span>{label}</span>
    </span>
  )
}

export default Badge