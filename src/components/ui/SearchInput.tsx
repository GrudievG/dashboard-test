import { ChangeEvent, useCallback, useState } from 'react';
import SearchIcon from '../../assets/icons/search.svg?react'
import Button from './Button.tsx';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
}

const SearchInput = ({
  value: searchQuery = '',
  placeholder = 'Search',
  onChange
}: SearchInputProps) => {
  const [inputText, setInputText] = useState(searchQuery);

  const onInputChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setInputText(value);
    },
    []
  );

  const handleTriggerSearch = useCallback(() => {
    onChange(inputText)
  }, [inputText, onChange])

  return (
    <div className="w-full flex">
      <div className="grow flex items-center gap-2 border border-gray-100 rounded-l-lg px-2 py-1">
        <SearchIcon className=" min-w-6 text-gray-700" />
        <input
          className="w-full"
          type="search"
          value={inputText}
          placeholder={placeholder}
          onChange={onInputChange}
        />
      </div>
      <Button
        className="rounded-l-none"
        onClick={handleTriggerSearch}
      >
        Search
      </Button>
    </div>
  )
}

export default SearchInput;