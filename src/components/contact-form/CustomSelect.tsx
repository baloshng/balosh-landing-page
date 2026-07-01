"use client"

import { useEffect, useRef, useState } from "react"

type Option = {
  value: string
  label: string
}

export type FieldChangeEvent = {
  target: { name: string; value: string }
}

type CustomSelectProps = {
  name: string
  value: string
  options: Option[]
  placeholder: string
  onChange: (event: FieldChangeEvent) => void
  required?: boolean
  className?: string
  ariaDescribedBy?: string
  ariaInvalid?: boolean
}

export function CustomSelect({
  name,
  value,
  options,
  placeholder,
  onChange,
  required = false,
  className = "",
  ariaDescribedBy,
  ariaInvalid = false,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((option) => option.value === value)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        rootRef.current &&
        event.target instanceof Node &&
        !rootRef.current.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [])

  return (
    <div
      ref={rootRef}
      className={`custom-select ${className}`.trim()}
      data-open={open ? "true" : "false"}
    >
      <button
        type="button"
        className={`custom-select-trigger ${value === "" ? "is-placeholder" : ""}`}
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={placeholder}
        aria-describedby={ariaDescribedBy}
      >
        <span className="custom-select-value">
          {selectedOption?.label ?? placeholder}
        </span>
        <span className="custom-select-chevron" aria-hidden="true">
          ▾
        </span>
      </button>

      <select
        name={name}
        value={value}
        required={required}
        onChange={(event) =>
          onChange({ target: { name: event.target.name, value: event.target.value } })
        }
        className="custom-select-native"
        tabIndex={-1}
        aria-hidden="true"
        aria-describedby={ariaDescribedBy}
        aria-invalid={ariaInvalid || undefined}
      >
        <option value="" />
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {open && (
        <div className="custom-select-menu" role="listbox" aria-label={placeholder}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`custom-select-option ${option.value === value ? "is-selected" : ""}`}
              onClick={() => {
                onChange({ target: { name, value: option.value } })
                setOpen(false)
              }}
              role="option"
              aria-selected={option.value === value}
            >
              {option.label}
            </button>
          ))}
          {required ? null : (
            <button
              type="button"
              className="custom-select-option is-placeholder-option"
              onClick={() => {
                onChange({ target: { name, value: "" } })
                setOpen(false)
              }}
              role="option"
              aria-selected={value === ""}
            >
              Clear selection
            </button>
          )}
        </div>
      )}
    </div>
  )
}
