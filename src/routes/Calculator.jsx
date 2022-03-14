import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import debounce from "../tools/debounce.js"
const rules = [
  {
    name: "GER/US",
    mil_list: [
      978, 954, 930, 907, 883, 859, 836, 812, 788, 764, 741, 717, 693, 670, 646,
      622,
    ],
  },
  {
    name: "CCCP",
    mil_list: [
      1120, 1099, 1077, 1056, 1035, 1013, 992, 971, 949, 928, 907, 885, 864,
      843, 821, 800,
    ],
  },
]

const Caculator = () => {
  const [mil, setMil] = useState("MIL")
  const [errorMessage, setErrorMessage] = useState("")
  const { team } = useParams()
  const input = useRef(null)
  useEffect(() => {
    calculate()
  }, [team])

  const calculate = () => {
    let distance = input.current.value
    let isValidity = validate(distance)
    if (!isValidity) {
      setMil("MIL")
      return
    }
    let { mil_list } = team === "1" ? rules[1] : rules[0]
    let index = Math.floor(distance / 100 - 1)
    let mil
    if (distance % 100 === 0) {
      mil = mil_list[index]
    } else {
      mil = Math.round(
        mil_list[index] -
          ((distance % 100) * (mil_list[index] - mil_list[index + 1])) / 100
      )
    }
    setMil(mil)
  }

  const validate = (value) => {
    const reg = /^\d+$/
    if (value) {
      if (!reg.test(value)) {
        setErrorMessage("Please input a number")
        return false
      } else if (value < 100 || value > 1600) {
        setErrorMessage("The number must be in [100,1600]")
        return false
      } else {
        setErrorMessage("")
        return true
      }
    } else {
      setErrorMessage("")
      return false
    }
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-20">
      <div>
        <input
          className="outline-none h-10 w-70 tracking-widest text-xl text-indigo-500 leading-loose text-center rounded-lg placeholder-indigo-300"
          type="text"
          placeholder="Target Distance"
          ref={input}
          onKeyUp={debounce(calculate)}
        />
        {errorMessage && (
          <div className="flex mt-3 bg-red-200 border-t-10 border-red-500 rounded-lg text-center">
            <span className="w-6 text-red-600 flex-grow-0">×</span>{" "}
            {errorMessage}
          </div>
        )}
      </div>
      <div className="h-10 w-70 tracking-widest text-xl bg-white text-indigo-500 leading-loose text-center rounded-lg">
        {mil}
      </div>
    </div>
  )
}

export default Caculator
