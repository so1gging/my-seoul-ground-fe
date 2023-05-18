import axios from 'axios'
import { ApiCulturalEventInfoOut } from '@/lib/api/culturalEventInfo/dto'
import { ApiIn } from '@/lib/api/dto'

const fetchCulturalEventInfo = async (params?: ApiIn) => {
  const res = await axios.get<ApiCulturalEventInfoOut>(
    `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_KEY}/json/culturalEventInfo/${
      params?.startIndex || 1
    }/${params?.endIndex || 50}/`,
  )

  return res.data.culturalEventInfo.row
}

export default fetchCulturalEventInfo
