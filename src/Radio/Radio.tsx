import React, { InputHTMLAttributes } from 'react'
import styles from './Radio.module.scss'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  radioSize?: 'sm' | 'md' | 'lg'
  labelOnLeft?: boolean
  customClass?: string
}

const Radio: React.FC<RadioProps> = ({ label, radioSize = 'md', labelOnLeft, customClass, ...props }) => {
  const radioClasses = [styles.radioLabel, styles[`size-${radioSize}`], customClass, labelOnLeft && styles.labelOnLeft]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <label className={radioClasses}>
        <input type='radio' {...props} />
        <div className={styles.circle}>
          <svg
            className={styles.radioIcon}
            version='1.1'
            viewBox='0 0 16 16'
            xmlSpace='preserve'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'>
            <circle cx='8' cy='8' r='8' />
          </svg>
        </div>
        {label && <span>{label}</span>}
      </label>
    </>
  )
}

export default Radio
