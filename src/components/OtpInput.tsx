import { useCallback, useEffect, useRef, useState } from 'react'

export interface OtpInputProps {
  length?: number
  value?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  autoFocus?: boolean
  disabled?: boolean
  className?: string
}

export default function OtpInput({
  length = 6,
  value,
  onChange,
  onComplete,
  autoFocus = true,
  disabled = false,
  className
}: OtpInputProps) {
  const [internal, setInternal] = useState<string[]>(Array.from({ length }, () => ''))
  const refs = useRef<HTMLInputElement[]>([])

  const vals = value ? value.split('').slice(0, length).concat(Array(length).fill('')).slice(0, length) : internal

  const focusIndex = (idx: number) => {
    if (idx >= 0 && idx < length) {
      refs.current[idx]?.focus()
      refs.current[idx]?.select()
    }
  }

  const emit = useCallback((next: string[]) => {
    const code = next.join('')
    onChange?.(code)
    if (code.length === length && !next.includes('')) {
      onComplete?.(code)
    }
  }, [onChange, onComplete, length])

  const applyAndAdvance = (i: number, digits: string) => {
    if (!digits) return
    const clean = digits.replace(/\D/g, '')
    if (!clean) return
    const base = [...vals]
    let cursor = i
    for (const d of clean.split('').slice(0, length - i)) {
      base[cursor] = d
      cursor++
    }
    if (!value) setInternal(base)
    emit(base)
    if (cursor < length) focusIndex(cursor)
    else refs.current[length - 1]?.blur()
  }

  const handleChange = (i: number, raw: string) => {
    if (disabled) return
    if (!raw) {
      const base = [...vals]
      base[i] = ''
      if (!value) setInternal(base)
      emit(base)
      return
    }
    applyAndAdvance(i, raw)
  }

  const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return
    if (e.key === 'Backspace') {
      if (vals[i]) {
        const base = [...vals]
        base[i] = ''
        if (!value) setInternal(base)
        emit(base)
      } else {
        focusIndex(i - 1)
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault(); focusIndex(i - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault(); focusIndex(i + 1)
    }
  }

  const handlePaste = (i: number, e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    applyAndAdvance(i, e.clipboardData.getData('text'))
  }

  useEffect(() => {
    if (autoFocus) focusIndex(0)
    // focusIndex is stable within component lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoFocus])

  return (
    <div className={className + ' flex items-center gap-3'}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={el => { if (el) refs.current[i] = el }}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="[0-9]*"
          maxLength={1}
          value={vals[i] ?? ''}
          placeholder="0"
          aria-label={`Digit ${i + 1} of ${length}`}
          className="w-12 h-12 text-center text-lg font-semibold border rounded-[10px] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#2970FF]"
          disabled={disabled}
          onChange={e => handleChange(i, e.target.value)}
          onKeyDown={e => handleKeyDown(i, e)}
          onPaste={e => handlePaste(i, e)}
        />
      ))}
    </div>
  )
}
