import { FunctionComponent } from "react"

interface Props {
  setInputValue: (inputValue: string) => void
}

export const SearchBar: FunctionComponent<Props> = ({ setInputValue }) => {

  const onChange = (e: any) => {
    const value = e.target.value
    if (value.length >= 3)
      setInputValue(value)
    else setInputValue('')
  }

  return (
    <>
      <div>SearchBar</div>
      <input
        name='searchBar'
        type='text'
        onChange={onChange}
      />
    </>
  )
}