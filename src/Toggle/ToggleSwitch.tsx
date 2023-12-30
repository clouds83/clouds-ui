import React, { InputHTMLAttributes } from 'react'
import styles from './ToggleSwitch.module.scss' // Update the import if you have separate styles for the toggle

export interface ToggleSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  toggleSize?: 'sm' | 'md' | 'lg'
  labelOnLeft?: boolean
  spaceBetween?: boolean
  customClass?: string
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  toggleSize = 'md',
  labelOnLeft,
  spaceBetween,
  customClass,
  ...props
}) => {
  const toggleClasses = [
    styles.toggleContainer,
    styles[`size-${toggleSize}`],
    labelOnLeft && styles.labelOnLeft,
    spaceBetween && styles.spaceBetween,
    customClass,
  ]
    .filter(Boolean)
    .join(' ')

  const Container = label ? 'label' : 'div'

  return (
    <Container className={toggleClasses}>
      <input type='checkbox' {...props} className={styles.toggleInput} />
      <span className={styles.slider}></span>
      {label && <span className={styles.labelText}>{label}</span>}
    </Container>
  )
}

export default ToggleSwitch
