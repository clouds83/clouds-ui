import React, { ReactElement, ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  color: 'primary' | 'success' | 'destructive'
  variant?: 'solid' | 'outlined' | 'link'
  size?: 'sm' | 'md' | 'lg'
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'pill' | 'circle'
  icon?: ReactElement
  iconRight?: boolean
  iconOnly?: boolean
  customClass?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  variant = 'solid',
  size = 'md',
  borderRadius = 'md',
  icon,
  iconRight,
  iconOnly,
  customClass,
  ...props
}) => {
  const buttonClasses = [
    color && styles[color],
    variant && styles[variant],
    styles[`size-${size}`],
    styles[`br-${borderRadius}`],
    styles.button,
    iconRight && styles.iconRight,
    iconOnly && styles.iconOnly,
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
