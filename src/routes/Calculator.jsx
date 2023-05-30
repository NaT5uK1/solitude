import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDebounce } from "react-use"
import { rules } from "../data/rules.json"
import ErrorPage from "./ErrorPage"
const Caculator = () => {
  const [distance, setDistance] = useState("")
  const [mil, setMil] = useState("MIL")
  const [errorMessage, setErrorMessage] = useState("")
  const { team } = useParams()
  const reg = /^\d+$/

  useEffect(() => {
    calculate()
  }, [team])

  useDebounce(
    () => {
      calculate()
    },
    100,
    [distance]
  )

  const calculate = () => {
    let isValidity = validate(distance)
    if (!isValidity) {
      setMil("MIL")
      return
    }
    let { mil_list } = rules[team]
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

  return !reg.test(team) || team > rules.length ? (
    <ErrorPage/>
  ) : (
    <div className="flex flex-col justify-center items-center space-y-20">
      <div>
        <input
          className="outline-none h-10 w-70 tracking-widest text-xl text-indigo-500 leading-loose text-center rounded-lg placeholder-indigo-300"
          type="text"
          placeholder="Target Distance"
          onKeyUp={(e) => setDistance(e.target.value)}
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
