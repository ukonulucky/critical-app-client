import React from 'react';

type User = {
  name: string;
  email: string;
  phone: string;
  accountNumber: string;
  accountType: string;
  balance: string;
};

type Transaction = {
  id: number;
  date: string;
  type: 'Credit' | 'Debit';
  amount: string;
  description: string;
};

const HomePageComp: React.FC = () => {
  const user: User = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+44 7911 123456',
    accountNumber: '1234567890',
    accountType: 'Savings',
    balance: '£5,420.00',
  };

  const transactions: Transaction[] = [
    { id: 1, date: '2025-04-21', type: 'Credit', amount: '£200.00', description: 'Salary' },
    { id: 2, date: '2025-04-19', type: 'Debit', amount: '£50.00', description: 'Groceries' },
    { id: 3, date: '2025-04-17', type: 'Debit', amount: '£120.00', description: 'Electricity Bill' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-700">Welcome, {user.name}</h1>
          <p className="text-gray-500">We're excited to have you banking with us!</p>
        </div>

        {/* User Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-4">
            <h2 className="font-semibold text-purple-700 mb-2">Personal Info</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>

          <div className="bg-purple-50 rounded-xl p-4">
            <h2 className="font-semibold text-blue-700 mb-2">Account Details</h2>
            <p><strong>Account Number:</strong> {user.accountNumber}</p>
            <p><strong>Type:</strong> {user.accountType}</p>
            <p><strong>Balance:</strong> {user.balance}</p>
          </div>
        </div>

        {/* Create PIN */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
            Create Transfer PIN
          </button>
        </div>

        {/* Transactions */}
        <div className="mt-4">
          <h2 className="text-xl font-bold text-purple-700 mb-3">Recent Transactions</h2>
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-blue-200 text-blue-900">
                <tr>
                  <th className="p-3">Date</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(txn => (
                  <tr key={txn.id} className="border-b last:border-none hover:bg-blue-50 transition">
                    <td className="p-3">{txn.date}</td>
                    <td className="p-3">{txn.description}</td>
                    <td className={`p-3 font-semibold ${txn.type === 'Credit' ? 'text-green-600' : 'text-red-500'}`}>
                      {txn.type}
                    </td>
                    <td className="p-3">{txn.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageComp;
