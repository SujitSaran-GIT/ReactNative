import { useState } from "react"

const useForm = (initialValue = '') => {
    const [value , setValue] = useState(initialValue)

    const handleChange = (text) => {
        setValue(text)
    }

    return{
        value,
        onChange : handleChange
    }
}

export default useForm