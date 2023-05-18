import MainImage from '@/asset/main-phone.svg'
import MainTitle from '@/asset/main-title.svg'
import { Box } from '@mui/material'

const MainLogo = () => {
  return (
    <Box position="relative" height="400px" width="560px">
      <MainTitle style={{ zIndex: 999, position: 'absolute', top: '118px' }} />
      <MainImage style={{ position: 'absolute', top: '0', left: '200px' }} />
    </Box>
  )
}

export default MainLogo
