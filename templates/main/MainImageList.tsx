import { ImageList, ImageListItem } from '@mui/material'
import useGetCulturalEventInfo from '@/lib/hooks/useGetCulturalEventInfo'
import Image from 'next/image'

const MainImageList = () => {
  const data = useGetCulturalEventInfo()

  return (
    <ImageList sx={{ width: 500, height: '100vh' }} variant="quilted" cols={4} rowHeight={121}>
      {data?.map((item) => (
        <ImageListItem key={item.MAIN_IMG} cols={1} rows={1}>
          <Image fill src={`${item.MAIN_IMG}`} alt={item.TITLE} loading="lazy" />
        </ImageListItem>
      )) || ''}
    </ImageList>
  )
}

export default MainImageList
