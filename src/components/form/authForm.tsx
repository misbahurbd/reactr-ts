import { FormEvent, useState } from "react"
import Input from "../common/input"
import Button from "../common/button"

const AuthForm = ({ formType }: { formType: "LOGIN" | "REGISTER" }) => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const loginUser = async () => {
    console.log("Login fn")
  }

  const registerUser = async () => {
    console.log("Register fn")
  }

  const onSubmti = async (e: FormEvent) => {
    e.preventDefault()
    let res
    if (formType == "LOGIN") {
      res = await loginUser()
    } else {
      res = await registerUser()
    }

    console.log(res)
  }

  return (
    <form
      className="mx-auto max-w-lg w-full space-y-4"
      onSubmit={onSubmti}
    >
      <div className="">
        <h2 className="font-bold text-2xl text-slate-900">
          {formType == "LOGIN" ? "Welcome back" : "Welcome to our App"}
        </h2>
        <p className="text-slate-500">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      {formType == "REGISTER" && (
        <InputField
          name="name"
          label="Full Name"
          value={name}
          placeholder="Enter your name"
          onChange={setName}
        />
      )}
      <InputField
        name="email"
        label="Email Address"
        value={email}
        placeholder="Enter your email address"
        onChange={setEmail}
      />
      <InputField
        name="password"
        label="Password"
        value={password}
        placeholder="Enter your password"
        onChange={setPassword}
      />
      {formType == "REGISTER" && (
        <InputField
          name="confirmPassword"
          label="Confirm password"
          value={confirmPassword}
          placeholder="Enter your confirm password"
          onChange={setConfirmPassword}
        />
      )}
      <Button
        type="submit"
        varient="primary"
        className="w-full rounded"
      >
        {formType == "LOGIN" ? "Login your account" : "Create new account"}
      </Button>
    </form>
  )
}

export default AuthForm

interface IInputField {
  name: string
  label: string
  value: string
  placeholder: string
  onChange: (value: string) => void
}

const InputField = ({
  name,
  label,
  value,
  placeholder,
  onChange,
}: IInputField) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-sm font-medium text-slate-800"
      >
        {label}
      </label>
      <Input
        id={name}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}
