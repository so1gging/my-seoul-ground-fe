import { ApiOut } from '@/lib/api/dto'

export interface GetCulturalEventInfoOut {
  CODENAME: string
  DATE: string
  END_DATE: string
  ETC_DESC: string
  GUNAME: string
  MAIN_IMG: string
  ORG_LINK: string
  ORG_NAME: string
  PLACE: string
  PLAYER: string
  PROGRAM: string
  RGSTDATE: string
  STRTDATE: string
  THEMECODE: string
  TICKET: string
  TITLE: string
  USE_FEE: string
  USE_TRGT: string
}

export interface ApiCulturalEventInfoOut {
  culturalEventInfo: ApiOut<GetCulturalEventInfoOut>
}
