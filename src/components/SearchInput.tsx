import { Input } from "@/ui/Input"
import { FC, useState } from "react"

interface SearchInputProps {
  handleSearchValue: (value: string) => void
}

export const SearchInput: FC<SearchInputProps> = ({ handleSearchValue }) => {
  const [value, setValue] = useState("");

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    handleSearchValue(e.target.value)
  }

  return (
    <Input onChange={handleInputValue} value={value} type="search" placeholder="E.g. Warsaw" />
  )
}

