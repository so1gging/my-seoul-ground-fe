import { Box, TextField } from '@mui/material'
import styled from '@emotion/styled'
import { FC } from 'react'
const Search: FC = () => {
  return (
    <Box bgcolor="#4378FF" display="flex" alignItems="center" width={395}>
      <SearchLayout />
      <SearchButton>Search</SearchButton>
    </Box>
  )
}

const SearchLayout = styled(TextField)`
  background-color: white;
  width: 320px;
  height: 50px;
  border: 1px solid #acb1c6;

  & .MuiInputBase-root.MuiOutlinedInput-root {
    width: 100%;
    height: 100%;
  }

  & .MuiInputBase-input {
    padding: 0 0 0 15px;
    height: 100%;
    border-radius: 0;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
`

const SearchButton = styled(Box)`
  color: white;
  margin-left: 15px;
  cursor: pointer;
`

export default Search
