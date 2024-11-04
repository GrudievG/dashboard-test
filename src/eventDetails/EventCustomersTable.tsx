import { format } from 'date-fns';
import { EventCustomer } from '../types/events.ts';

interface EventsCustomersTableProps {
  customers: EventCustomer[];
}

const EventsCustomersTable = ({ customers }: EventsCustomersTableProps) => {
  return (
    <div className="border border-gray-100 rounded-xl p-4">
      <h3 className="text-xl font-medium mb-6">List of Customers</h3>
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
          <th scope="col" className="hidden lg:table-cell py-2 pl-4 pr-8 font-medium">ID</th>
          <th scope="col" className="hidden sm:table-cell py-2 pl-0 pr-8 font-medium">Customer Name</th>
          <th scope="col" className="py-2 pl-0 pr-8 font-medium">Email</th>
          <th scope="col" className="hidden lg:table-cell py-2 pl-0 pr-8 font-medium lg:pr-20">Tickets number</th>
          <th scope="col" className="hidden sm:table-cell py-2 pl-0 pr-8 font-medium">Date</th>
          <th scope="col" className="py-2 pl-0 pr-8 font-medium lg:pr-20">Amount</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
        {customers.map((customer) => (
          <tr key={customer.id} className="text-sm">
            <td className="hidden lg:table-cell py-4 pl-4 pr-8">
              <p>#{customer.id}</p>
            </td>
            <td className="hidden sm:table-cell py-4 pl-0 pr-8">
              <p>{customer.name}</p>
            </td>
            <td className="py-4 pl-0 pr-8">
              <p>{customer.email}</p>
            </td>
            <td className="hidden lg:table-cell py-4 pl-0 pr-8">
              <p>{customer.tickets} tickets</p>
            </td>
            <td className="hidden sm:table-cell py-4 pl-0 pr-8">
              <time
                dateTime={format(new Date(customer.purchaseDate), 'yyyy-MM-dd')}
              >
                {format(new Date(customer.purchaseDate), 'MMM dd, yyyy')}
              </time>
            </td>
            <td className="py-4 pl-0 pr-8">
              <p>${customer.amount}</p>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventsCustomersTable;