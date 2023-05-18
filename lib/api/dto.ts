export interface ResultOut {
  code: string
  message: string
}

export interface ApiOut<T> {
  result: ResultOut
  listTotalCount: number
  row: T[]
}

export interface ApiIn {
  startIndex?: number
  endIndex?: number
  codeName?: string
  title?: string
}
