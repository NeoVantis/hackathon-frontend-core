import React, { useState, useId } from 'react';

interface InputFieldProps {
  label: string;
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
  suffix?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  name,
  required = false,
  suffix,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputId = useId();

  const hasValue = value.length > 0;
  const shouldFloat = isFocused || hasValue;

  return (
    <div className="relative">
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-3 bg-transparent rounded-lg border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-[#1D3EE7] focus:ring-2 focus:ring-[#1D3EE7] focus:ring-opacity-50 transition-colors"
      />
      <label
        htmlFor={inputId}
        className={`absolute left-4 text-gray-400 transition-all duration-200 ease-in-out pointer-events-none ${
          shouldFloat
            ? 'top-0 -translate-y-1/2 text-xs bg-[#02060A] px-1'
            : 'top-1/2 -translate-y-1/2 text-sm'
        }`}
      >
        {label}
      </label>
      {suffix && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {suffix}
        </div>
      )}
    </div>
  );
};

interface OnboardingInputProps {
  label: string;
  type: 'text' | 'tel' | 'email' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
}

const OnboardingInput: React.FC<OnboardingInputProps> = ({
  label,
  type,
  value,
  onChange,
  name,
  required = false,
}) => {
  const inputId = useId();

  return (
    <div className="relative">
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        className="w-full px-6 py-6 bg-transparent rounded-[99px] border-2 border-blue-900/60 text-white text-xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
      />
      <label
        htmlFor={inputId}
        className="absolute left-4 top-0 -translate-y-1/2 text-[18px] bg-[#02060A] px-1 text-gray-400"
      >
        {label}
      </label>
    </div>
  );
};

export { OnboardingInput };
export default InputField;
