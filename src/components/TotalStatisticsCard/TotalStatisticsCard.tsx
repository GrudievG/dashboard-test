import UsersIcon from '../../assets/icons/users.svg?react'
import CaseIcon from '../../assets/icons/case.svg?react'
import CheckIcon from '../../assets/icons/check.svg?react'
import HeartIcon from '../../assets/icons/heart.svg?react'
import { TotalStatistics } from '../../types/statistics.ts';
import StatisticsItem from './StatisticsItem.tsx';

interface TotalStatisticsCardProps {
  statistics: TotalStatistics
}

const TotalStatisticsCard = ({ statistics }: TotalStatisticsCardProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 border border-gray-100 rounded-xl p-4">
    <StatisticsItem
      title="Total Users"
      statistics={statistics.users}
      icon={<UsersIcon className="text-info"/>}
    />
    <StatisticsItem
      className="sm:border-l"
      title="Total Income"
      statistics={statistics.income}
      icon={<CaseIcon className="text-info"/>}
      showCurrency
    />
    <StatisticsItem
      className="lg:border-l"
      title="Tickets Sold"
      statistics={statistics.tickets}
      icon={<CheckIcon className="text-info"/>}
    />
    <StatisticsItem
      className="sm:border-l"
      title="Favorite"
      statistics={statistics.favorite}
      icon={<HeartIcon className="text-info"/>}
    />
  </div>
)

export default TotalStatisticsCard