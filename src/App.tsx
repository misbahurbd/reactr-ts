import { useState } from "react"
import AuthForm from "./components/form/authForm"
import Button from "./components/common/button"

const App = () => {
  const [formType, setFormType] = useState<"LOGIN" | "REGISTER">("LOGIN")

  return (
    <div className="grid place-items-center min-h-screen">
      <AuthForm formType={formType} />
      <Button
        onClick={() =>
          setFormType(type => (type == "LOGIN" ? "REGISTER" : "LOGIN"))
        }
      >
        Toggle
      </Button>
    </div>
  )
}
export default App
