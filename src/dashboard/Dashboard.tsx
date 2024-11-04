import { useEffect, useState } from 'react';
import dataService from '../services/dataService.ts';
import TotalStatisticsCard from '../components/TotalStatisticsCard/TotalStatisticsCard.tsx';
import { Event } from '../types/events.ts';
import EventsListTable from './EventsListTable.tsx';
import { TotalStatistics } from '../types/statistics.ts';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const statistics: TotalStatistics = {
  users: {
    total: 9935,
    weekly: 25,
    percentage: 3.5,
    growth: true
  },
  income: {
    total: 52439,
    weekly: 358,
    percentage: 13.6,
    growth: true
  },
  tickets: {
    total: 26827,
    weekly: 743,
    percentage: 9.8,
    growth: false
  },
  favorite: {
    total: 124854,
    weekly: 247,
    percentage: 7.3,
    growth: true
  }
}

const lineChartData = [
  {
    name: 'Jan',
    offline: 200,
    online: 300
  },
  {
    name: 'Feb',
    offline: 250,
    online: 150
  },
  {
    name: 'Mar',
    offline: 180,
    online: 225
  },
  {
    name: 'Apr',
    offline: 300,
    online: 180
  }
]

const Dashboard = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    (async () => {
      const eventsData = await dataService.getEvents()
      setEvents(eventsData)
    })()
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium text-gray-800">
        Welcome, John
      </h1>
      <p className="text-gray-300 mb-3">
        Here is the information about all your events
      </p>
      <div className="mb-8">
        <TotalStatisticsCard statistics={statistics}/>
      </div>
      <div className="border border-gray-100 rounded-xl p-4 mb-8">
        <h3 className="text-xl font-medium mb-8">Events Analytics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineChartData}>
            <Line type="monotone" dataKey="offline" name="Offline orders" stroke="#4F55F1"/>
            <Line type="monotone" dataKey="online" name="Online orders" stroke="#FF9500"/>
            <Tooltip wrapperStyle={{backgroundColor: '#ccc' }} />
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" vertical={false} />
            <Legend
              wrapperStyle={{
                top: -57,
                right: 0,
                width: 'auto',
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <EventsListTable events={events}/>
    </div>
  )
}

export default Dashboard;