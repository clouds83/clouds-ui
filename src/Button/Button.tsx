import React, { ReactElement, ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: 'outline' | 'link'
  size?: 'sm' | 'md' | 'lg'
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'pill' | 'circle'
  icon?: ReactElement
  iconRight?: boolean
  iconOnly?: boolean
  success?: boolean
  destructive?: boolean
  customClass?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size = 'md',
  borderRadius = 'md',
  icon,
  iconRight,
  iconOnly,
  success,
  destructive,
  customClass,
  ...props
}) => {
  const buttonClasses = [
    variant && styles[variant],
    styles[`size-${size}`],
    styles[`br-${borderRadius}`],
    styles.button,
    iconRight && styles.iconRight,
    iconOnly && styles.iconOnly,
    success && styles.success,
    destructive && styles.destructive,
    customClass,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={buttonClasses} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  )
}

export default Button
