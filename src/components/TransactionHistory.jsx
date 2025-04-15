/* eslint-disable react/prop-types */
import { useUserStore } from '../store/Global';
import { useGetUserTransactions } from '../apis/transaction';
import TransactionHistoryList from './TransactionHistoryList';
import { useRef, useState } from 'react';
import TransactionDetails from './TransactionDetails';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';


// Mock data for transactions
const mockTransactions = {
  'user1': [
    {
      id: 'txn1',
      date: '2025-04-06T14:30:00Z', // Most recent - April 6th
      amount: 85000,
      type: 'purchase',
      status: 'pending',
      description: 'Annual business software license'
    },
    {
      id: 'txn2',
      date: '2025-03-28T11:15:00Z',
      amount: 12500,
      type: 'subscription',
      status: 'completed',
      description: 'Monthly cloud storage'
    },
    {
      id: 'txn3',
      date: '2025-03-15T09:45:00Z',
      amount: 32000,
      type: 'refund',
      status: 'completed',
      description: 'Cancelled premium service'
    },
    {
      id: 'txn4',
      date: '2025-03-02T16:20:00Z',
      amount: 7500,
      type: 'withdrawal',
      status: 'completed',
      description: 'Vendor payout'
    },
    {
      id: 'txn5',
      date: '2025-02-22T13:10:00Z',
      amount: 150000,
      type: 'investment',
      status: 'completed',
      description: 'Startup funding round'
    },
    {
      id: 'txn6',
      date: '2025-02-10T10:30:00Z',
      amount: 4500,
      type: 'utility',
      status: 'failed',
      description: 'Electricity bill payment'
    },
    {
      id: 'txn7',
      date: '2025-01-28T08:45:00Z',
      amount: 28000,
      type: 'transfer',
      status: 'completed',
      description: 'Interbank transfer'
    },
    {
      id: 'txn8',
      date: '2025-01-15T12:00:00Z',
      amount: 9500,
      type: 'deposit',
      status: 'completed',
      description: 'Client payment received'
    },
    {
      id: 'txn9',
      date: '2025-01-08T15:30:00Z',
      amount: 62000,
      type: 'invoice',
      status: 'completed',
      description: 'Web development services'
    },
    {
      id: 'txn10',
      date: '2025-01-03T09:15:00Z', // Oldest - January 3rd
      amount: 3500,
      type: 'fee',
      status: 'completed',
      description: 'Service charge'
    }
  ],
  'user2': [
    {
      id: 'txn4',
      date: '2023-07-12T16:20:00Z',
      amount: 199.99,
      type: 'purchase',
      status: 'completed',
      description: 'Annual plan'
    },
    {
      id: 'txn5',
      date: '2023-07-08T11:10:00Z',
      amount: 19.99,
      type: 'purchase',
      status: 'failed',
      description: 'Feature unlock'
    }
  ],
  'user3': [
    {
      id: 'txn6',
      date: '2023-07-18T13:25:00Z',
      amount: 149.99,
      type: 'purchase',
      status: 'pending',
      description: 'Business package'
    }
  ],
  'user4': [
    {
      id: 'txn7',
      date: '2023-07-01T08:00:00Z',
      amount: 9.99,
      type: 'purchase',
      status: 'completed',
      description: 'Basic plan'
    },
    {
      id: 'txn8',
      date: '2023-06-28T15:30:00Z',
      amount: 9.99,
      type: 'purchase',
      status: 'completed',
      description: 'Basic plan renewal'
    },
    {
      id: 'txn9',
      date: '2023-06-15T12:45:00Z',
      amount: 19.99,
      type: 'purchase',
      status: 'failed',
      description: 'Upgrade to premium'
    }
  ]
};

export default function TransactionHistory() {
  const swiperRef = useRef(null);
const [selected, setSelected] = useState({})

  const goNext=(transaction)=>{
  if(swiperRef.current){
    setSelected(transaction)
  swiperRef.current?.slideNext()
  }
  }
  const goBack=()=>{
  if(swiperRef.current){
  swiperRef.current?.slidePrev()
  }
  }

  const {user}=useUserStore()
const {data,isFetching,error}=useGetUserTransactions(user?.email)
console.log(data)

  // useEffect(() => {
  //   if (!userId) return;

  //   setLoading(true);
  //   setError(null);
    
  //   // Simulate API call with timeout
  //   const timer = setTimeout(() => {
  //     try {
  //       const userTransactions = mockTransactions[userId] || [];
  //       setTransactions(userTransactions);
  //     } catch (err) {
  //       setError('Failed to fetch transactions');
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, [userId]);

  const SwiperSteps = [
    { id: 0, content: <TransactionHistoryList transactions={data?.transactions} goNext={goNext}/> },
    { id: 1, content: <TransactionDetails transaction={selected} goBack={goBack}/>},
];

  if (!user?.email) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center text-gray-500">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg font-medium">Please select a user to view transactions</p>
        </div>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
             <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Save swiper instance in ref
        }}
        spaceBetween={50}
        slidesPerView={1}
        className="h-auto"
      >
        {SwiperSteps.map((step) => (
          <SwiperSlide key={step.id}>
              {step.content}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}