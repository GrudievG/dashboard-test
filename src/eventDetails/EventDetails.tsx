import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import clsx from 'clsx';
import dataService from '../services/dataService.ts';
import ArrowLeftIcon from '../assets/icons/arrow-left.svg?react'
import { EventFull } from '../types/events.ts'
import { format } from 'date-fns';
import { TotalStatistics } from '../types/statistics.ts';
import TotalStatisticsCard from '../components/TotalStatisticsCard/TotalStatisticsCard.tsx';
import EventsCustomersTable from './EventCustomersTable.tsx';

const statusTitles = {
  active: 'Active',
  finished: 'Finished',
  upcoming: 'On Delivery',
}

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState<EventFull | null>(null);
  const [statistics, setStatistics] = useState<TotalStatistics | null>(null)

  useEffect(() => {
    (async () => {
      if (eventId) {
        const eventData = await dataService.getEventById(eventId);
        console.log('eventData:', eventData);
        setEvent(eventData.event);
        setStatistics(eventData.statistics);
      }
    })()
  }, [eventId]);

  return  event ? (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <Link to="/">
          <ArrowLeftIcon/>
        </Link>
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg shadow-icon">
          <div className={clsx(
            'flex-none rounded-full p-1',
            {
              'bg-green-400/10 text-green-400': event.status === 'active',
              'bg-orange-400/10 text-orange-400': event.status === 'upcoming',
              'bg-red-400/10 text-red-400': event.status === 'finished',
            }
          )}>
            <div className="h-2 w-2 rounded-full bg-current"></div>
          </div>
          <span>{statusTitles[event.status]}</span>
        </div>
      </div>
      <h1 className="text-3xl font-medium text-gray-800 mb-6">
        {event.name}
      </h1>
      <div className="text-sm mb-10">
        <div className="flex mb-1">
          <span className="min-w-20">Location:</span>
          <span>{event.location}</span>
        </div>
        <div className="flex mb-1">
          <span className="min-w-20">Date:</span>
          <span>{format(new Date(event.date), 'MMM dd, yyyy')}</span>
        </div>
        <div className="flex mb-1">
          <span className="min-w-20">Price:</span>
          <span>{event.price}</span>
        </div>
      </div>
      {statistics && (
        <div className="mb-8">
          <TotalStatisticsCard statistics={statistics}/>
        </div>
      )}
      <EventsCustomersTable customers={event.customers} />
    </div>
  ) : (
    <p>Loading...</p>
  )
}

export default EventDetails;