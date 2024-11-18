import { ReactNode, useState } from "react"

type buttonProps = {
  children: ReactNode,
  variant?: 'primary' | 'secondary',
}

export function Button({children, variant = 'primary'}: buttonProps) {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        console.log('click')
        setCounter((prev) => prev + 1)
    }

    let classVariant = variant === 'primary' ? "px-4 py-2 rounded-md bg-red-600 text-white" : "px-4 py-2 rounded-md bg-blue-600 text-white"
  return (
    <button
        className={classVariant} 
        onClick={handleClick}       
      >
        {children} {counter}
      </button>
  )
}