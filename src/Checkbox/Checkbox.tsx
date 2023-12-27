import React, { InputHTMLAttributes } from 'react'
import styles from './Checkbox.module.scss'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  checkboxSize?: 'sm' | 'md' | 'lg'
  labelOnLeft?: boolean
  customClass?: string
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checkboxSize = 'sm', labelOnLeft, customClass, ...props }) => {
  const checkboxClasses = [
    styles.checkboxLabel,
    styles[`size-${checkboxSize}`],
    customClass,
    labelOnLeft && styles.labelOnLeft,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <label className={checkboxClasses}>
        <input type='checkbox' {...props} />
        <div className={styles.square}>
          <svg
            className={styles.checkIcon}
            version='1.1'
            viewBox='0 0 24 24'
            xmlSpace='preserve'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'>
            <path d='M10,18c-0.5,0-1-0.2-1.4-0.6l-4-4c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2.1-0.8,2.8,0l2.6,2.6l6.6-6.6   c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8l-8,8C11,17.8,10.5,18,10,18z' />
          </svg>
        </div>
        {label && <span>{label}</span>}
      </label>
    </>
  )
}

export default Checkbox
