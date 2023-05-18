import { useQuery } from 'react-query'
import fetchCulturalEventInfo from '@/lib/api/culturalEventInfo/fetchCulturalEventInfo'
import { ApiIn } from '@/lib/api/dto'

const useGetCulturalEventInfo = (params?: ApiIn) => {
  const { data } = useQuery('culturalEventInfo', () => fetchCulturalEventInfo(params))
  return data
}

export default useGetCulturalEventInfo
