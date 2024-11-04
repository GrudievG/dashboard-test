import { ReactNode } from 'react';
import { TotalStatisticsItem } from '../../types/statistics.ts';
import formatNumberWithCommas from '../../utils/formatNumberWithCommas.ts';
import UpIcon from '../../assets/icons/up.svg?react'
import DownIcon from '../../assets/icons/down.svg?react'

interface StatisticsItem {
  title: string;
  statistics: TotalStatisticsItem,
  icon: ReactNode,
  className?: string
  showCurrency?: boolean,
}

const StatisticsItem = ({
  title,
  statistics,
  icon,
  className = '',
  showCurrency = false
}: StatisticsItem) => (
  <div className={`px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="flex justify-between items-start mb-2">
      <div className="flex flex-col">
        <span className="text-3xl font-semibold mb-2">{formatNumberWithCommas(statistics.total)}{showCurrency && '$'}</span>
        <span>{title}</span>
      </div>
      <div className="p-2 rounded-xl shadow-icon">
        {icon}
      </div>
    </div>
    <div className="flex items-center gap-2 text-sm text-gray-300">
      {statistics.growth ? (
        <UpIcon/>
      ) : (
        <DownIcon/>
      )}

      <span>{statistics.weekly}</span>
      <span>{statistics.growth ? '+' : '-'}{statistics.percentage}% this week</span>
    </div>
  </div>
)

export default StatisticsItem;