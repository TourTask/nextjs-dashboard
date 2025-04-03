import { fetchCustomers } from '@/app/lib/data';
import { Suspense } from 'react';

import {
  UserCircleIcon,
} from '@heroicons/react/24/outline';

// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';
  
async function CustomerSelectBox() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const customers = await fetchCustomers();

  return (
    <div className="relative">
      <select
        id="customer"
        name="customerId"
        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
        defaultValue=""
      >
        <option value="" disabled>
          Select a customer
        </option>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.name}
          </option>
        ))}
      </select>
      <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
    </div>
  );
}

function CustomerSelectBoxSkeleton() {
  return (
    <div className="relative">
      <select
        id="customer"
        name="customerId"
        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
        defaultValue=""
      >
        <option value="" disabled>
          Loading customers...
        </option>
      </select>
      <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
    </div>
  );
}

export default function SelectCustomer() {
  //Make make await with setTimeout for testing


    return (
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          
          <Suspense fallback={<CustomerSelectBoxSkeleton />}>
           <CustomerSelectBox />
          </Suspense>
        </div>
    );
}