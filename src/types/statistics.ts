export interface TotalStatisticsItem {
  total: number
  weekly: number
  percentage: number
  growth: boolean
}

export interface TotalStatistics {
  [key: string] : TotalStatisticsItem
}