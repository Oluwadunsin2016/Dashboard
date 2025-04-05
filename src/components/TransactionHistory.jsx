/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { formatCurrency } from '../lib/utils';
import { useUserStore } from '../store/Global';

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

export default function TransactionHistory({ userId = 'user1' }) {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {user}=useUserStore()

  useEffect(() => {
    if (!userId) return;

    setLoading(true);
    setError(null);
    
    // Simulate API call with timeout
    const timer = setTimeout(() => {
      try {
        const userTransactions = mockTransactions[userId] || [];
        setTransactions(userTransactions);
      } catch (err) {
        setError('Failed to fetch transactions');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [userId]);

  if (!userId) {
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

  if (loading) {
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
      <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-indigo-500 to-purple-600">
        <h3 className="text-lg leading-6 font-medium text-white">
          Transaction History
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-indigo-100">
          All transactions for {user?.firstName} {user?.lastName}
        </p>
      </div>
      
      {transactions.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(transaction.date).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${
                      transaction.type === 'refund' ? 'text-green-600' : 'text-gray-900'
                    }`}>
                      {transaction.type === 'refund' ? '+' : '-'}{formatCurrency('NGN',transaction.amount)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 capitalize">
                      {transaction.type}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                      transaction.status === 'failed' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{transaction.description}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-8 text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No transactions</h3>
          <p className="mt-1 text-sm text-gray-500">This user has no transaction history.</p>
        </div>
      )}
    </div>
  );
}