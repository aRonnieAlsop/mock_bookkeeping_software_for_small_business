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
        <form
            onSubmit={handleSubmit}
            className="
    w-full 
    max-w-full 
    sm:max-w-2xl 
    md:max-w-3xl 
    lg:max-w-4xl 
    xl:max-w-5xl 
    p-4 sm:p-6 md:p-8 
    bg-[#fdf8ee] 
    text-black 
    shadow 
    mx-auto 
    space-y-6
  "
        >

            <h2 className="text-3xl font-extrabold text-center font-serif tracking-wide">New Transaction</h2>

            <div className="flex gap-4">
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="type"
                        value="income"
                        checked={type === 'income'}
                        onChange={() => setType('income')}
                        className="appearance-none w-4 h-4 border-2 border-gray-500 checked:bg-green-500"
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
                        className="appearance-none w-4 h-4 border-2 border-gray-500 checked:bg-green-500"
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

            <button type="submit" className="bg-[#c88f5f] text-white px-6 py-2 font-semibold center shadow hover:bg-[#a46f45] transition-all">
                ✙
            </button>
        </form>
    );
}
