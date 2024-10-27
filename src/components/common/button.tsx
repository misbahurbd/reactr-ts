import { ButtonHTMLAttributes } from "react"
import { cn } from "../../utility"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  varient?: "primary" | "secondary" | "accent" | "link"
  className?: string
}

const Button = ({ varient, className, children, ...props }: Props) => {
  let varientClassName

  switch (varient) {
    case "primary":
      varientClassName =
        "bg-orange-500 border-orange-500 hover:bg-orange-600 text-white"
      break
    case "secondary":
      varientClassName =
        "bg-teal-500 border-teal-500 hover:bg-teal-600 text-white"
      break
    case "accent":
      varientClassName = "bg-black border-black hover:bg-black/80 text-white"
      break
    default:
      varientClassName = "border-rose-500 text-rose-500"
      break
  }

  return (
    <button
      className={cn("px-4 py-2 transition border", varientClassName, className)}
      {...props}
    >
      {children}
    </button>
  )
}
export default Button
