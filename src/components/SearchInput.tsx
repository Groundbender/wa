import { Input } from "@/ui/Input"
import { FC, useState } from "react"

interface SearchInputProps {
  handleSearchValue: (value: string) => void
}

export const SearchInput: FC<SearchInputProps> = ({ handleSearchValue }) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    handleSearchValue(e.target.value)
  }

  return (
    <Input onChange={onChange} value={value} type="text" placeholder="E.g. Warsaw" />
  )
}