import { InputHTMLAttributes } from "react"
import { cn } from "../../utility"

const Input = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn(
        "border border-slate-300 shadow p-3 w-full leading-none text-sm rounded !outline-none",
        className
      )}
      {...props}
    />
  )
}

export default Input
