import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import clsx from 'clsx';
import { Event } from '../types/events.ts';

interface EventsListTableProps {
  events: Event[];
}

const statusTitles = {
  active: 'Active',
  finished: 'Finished',
  upcoming: 'On Delivery',
}

const EventsListTable = ({ events }: EventsListTableProps) => {
  return (
    <div className="border border-gray-100 rounded-xl p-4">
      <h3 className="text-xl font-medium mb-6">List of Events</h3>
      <table className="w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-full sm:w-4/12"/>
          <col className="lg:w-4/12"/>
          <col className="lg:w-2/12"/>
          <col className="lg:w-1/12"/>
          <col className="lg:w-1/12"/>
        </colgroup>
        <thead className="border-b border-gray-100 text-sm/6">
        <tr>
          <th scope="col" className="hidden md:table-cell py-2 pl-4 pr-8 font-medium">ID</th>
          <th scope="col" className="hidden sm:table-cell py-2 pl-0 pr-8 font-medium">Date</th>
          <th scope="col" className="py-2 pl-0 pr-8 font-medium">Event Name</th>
          <th scope="col" className="hidden md:table-cell py-2 pl-0 pr-8 font-medium lg:pr-20">Location</th>
          <th scope="col" className="hidden sm:table-cell py-2 pl-0 pr-8 font-medium lg:pr-20">Amount</th>
          <th scope="col" className="py-2 pl-0 pr-4 sm:pr-8 lg:pr-20 font-medium text-right sm:text-left">Status</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
        {events.map((event) => (
          <tr key={event.id} className="text-sm">
            <td className="hidden md:table-cell py-4 pl-4 pr-8">
              <Link to={`/events/${event.id}`}>#{event.id}</Link>
            </td>
            <td className="hidden sm:table-cell py-4 pl-0 pr-8">
              <Link to={`/events/${event.id}`}>
                <time
                  dateTime={format(new Date(event.date), 'yyyy-MM-dd')}
                >
                  {format(new Date(event.date), 'MMM dd, yyyy')}
                </time>
              </Link>
            </td>
            <td className="py-4 pl-0 pr-4 sm:pr-8 lg:pr-20">
              <Link to={`/events/${event.id}`}>{event.name}</Link>
            </td>
            <td className="hidden md:table-cell py-4 pl-0 pr-8 lg:pr-20">
              <Link to={`/events/${event.id}`}>{event.location}</Link>
            </td>
            <td className="hidden sm:table-cell py-4 pl-0 pr-4 sm:pr-6 lg:pr-8">
              <Link to={`/events/${event.id}`}>${event.amount}</Link>
            </td>
            <td className="py-4 pl-0 pr-4 sm:pr-8 lg:pr-20">
              <Link to={`/events/${event.id}`}>
                <div className="flex items-center gap-2 px-2 py-1 rounded-lg shadow-icon">
                  <div className={clsx(
                    'flex-none rounded-full p-1',
                    {
                      'bg-green-400/10 text-green-400': event.status === 'active',
                      'bg-orange-400/10 text-orange-400': event.status === 'upcoming',
                      'bg-red-400/10 text-red-400': event.status === 'finished',
                    }
                  )}>
                    <div className="h-1.5 w-1.5 rounded-full bg-current"></div>
                  </div>
                  <span className="text-xs">{statusTitles[event.status]}</span>
                </div>
              </Link>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventsListTable;