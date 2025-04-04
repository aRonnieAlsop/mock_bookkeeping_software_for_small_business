'use client';

import { useState } from 'react';

export default function TransactionForm() {
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [party, setParty] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      type,
      category,
      amount,
      party,
      notes,
      date,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold">New Transaction</h2>

      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="type"
            value="income"
            checked={type === 'income'}
            onChange={() => setType('income')}
          />
          Income
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="type"
            value="expense"
            checked={type === 'expense'}
            onChange={() => setType('expense')}
          />
          Expense
        </label>
      </div>

      <div>
        <label className="block font-medium">Category</label>
        <select
          className="w-full border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="operating_expenses">Operating Expenses</option>
          <option value="cogs">COGS</option>
          <option value="marketing">Marketing & Advertising</option>
          <option value="vehicle_mileage">Vehicle Mileage</option>
          <option value="contractor_payments">Contractor Payments</option>
          <option value="insurance">Insurance</option>
          <option value="professional_fees">Professional Fees</option>
          <option value="home_office">Home Office Expenses</option>
          <option value="depreciation">Depreciation</option>
          <option value="new_tools">New Tools</option>
          <option value="taxes">Taxes & Licenses</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Amount</label>
        <input
          type="number"
          className="w-full border p-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block font-medium">Paid to / Received from</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={party}
          onChange={(e) => setParty(e.target.value)}
        />
      </div>

      <div>
        <label className="block font-medium">Notes</label>
        <textarea
          className="w-full border p-2 rounded"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div>
        <label className="block font-medium">Date</label>
        <input
          type="date"
          className="w-full border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      ✙
      </button>
    </form>
  );
}
