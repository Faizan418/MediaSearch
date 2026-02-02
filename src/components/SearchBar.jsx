import { useState } from "react"
import { useDispatch } from "react-redux"
import { setQuery } from "../redux/features/searchSlice"

const SearchBar = () => {

    const [text, settext] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }

  return (
    <div>
        <form onSubmit={(e) => {submitHandler(e)}} className="flex gap-5 bg-gray-900 p-10">
            <input type="text" placeholder="Search anything..." required className=" w-full active:border-red-700 hover:border-blue-700 border-2 px-4 py-2 text-xl rounded outline-none" />
            <button type="search" className="active:scale-95 active:border-red-700 hover:border-blue-700 border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer" >Search</button>
        </form>
    </div>
  )
}

export default SearchBar
