import { useCallback, useEffect, useRef, useState } from 'react'

export interface OtpInputProps {
  length?: number
  value?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  autoFocus?: boolean
  disabled?: boolean
  className?: string
  /** size in pixels (width & height) */
  size?: number
}

export default function OtpInput({
  length = 6,
  value,
  onChange,
  onComplete,
  autoFocus = true,
  disabled = false,
  className,
  size = 64, // default box size in px
}: OtpInputProps) {
  const [internal, setInternal] = useState<string[]>(
    Array.from({ length }, () => '')
  )
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const refs = useRef<HTMLInputElement[]>([])

  // safe className concatenation
  const containerClass = `${className ?? ''} flex items-center gap-3`.trim()

  const vals = value
    ? value.split('').slice(0, length).concat(Array(length).fill('')).slice(0, length)
    : internal

  const focusIndex = (idx: number) => {
    if (idx >= 0 && idx < length) {
      refs.current[idx]?.focus()
      refs.current[idx]?.select()
    }
  }

  const emit = useCallback(
    (next: string[]) => {
      const code = next.join('')
      onChange?.(code)
      if (code.length === length && !next.includes('')) {
        onComplete?.(code)
      }
    },
    [onChange, onComplete, length]
  )

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
    if (cursor < length) setTimeout(() => focusIndex(cursor), 0)
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
      e.preventDefault()
      if (vals[i]) {
        const base = [...vals]
        base[i] = ''
        if (!value) setInternal(base)
        emit(base)
        focusIndex(i)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoFocus])

  // computed inline style ensures fixed size and predictable layout
  const sizePx = `${size}px`
  const fontPx = Math.max(12, Math.round(size * 0.36)) + 'px' // scale font with size
  const inputStyle: React.CSSProperties = {
    width: sizePx,
    height: sizePx,
    minWidth: sizePx,
    minHeight: sizePx,
    boxSizing: 'border-box',
    lineHeight: sizePx,
    fontSize: fontPx,
    padding: 0,
  }

  return (
    <div className={containerClass}>
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
          placeholder={focusedIndex === i ? "" : "0"} // keep placeholder empty to avoid layout shifts
          aria-label={`Digit ${i + 1} of ${length}`}
          // important: prevent flex grow/shrink so size stays fixed
          className="flex-none text-center text-lg font-semibold border border-[#4A4B4BFF] rounded-[10px] bg-[#262A2D] text-white focus:outline-none focus:ring-2 focus:ring-[#2970FF] focus:border-[#1D3EE7]"
          disabled={disabled || (i > 0 && !vals[i - 1])}
          onChange={e => handleChange(i, e.target.value)}
          onKeyDown={e => handleKeyDown(i, e)}
          onPaste={e => handlePaste(i, e)}
          onFocus={() => setFocusedIndex(i)}
          onBlur={() => setFocusedIndex(null)}
          style={inputStyle}
        />
      ))}
    </div>
  )
}
