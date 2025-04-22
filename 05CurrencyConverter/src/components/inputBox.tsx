
import React, { useId } from 'react'

interface InputBoxProps {
    label: string
    amount: number
    onAmountChange?: (amount: number) => void
    onCurrencyChange?: (currency: string) => void
    currencyOptions: string[]
    selectCurrency: string
    amountDisable?: boolean
    currencyDisable?: boolean
    className?: string
}

const InputBox: React.FC<InputBoxProps> = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) => {
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                
                <select
                    className="w-full mt-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
>                  
                    {currencyOptions.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency.toUpperCase()}
                      </option>
                    ))}
                </select>

            </div>
        </div>
    )
}

export default InputBox
