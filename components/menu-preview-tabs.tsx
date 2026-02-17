'use client';

import { useState } from 'react';

type TabKey = 'mains' | 'sides' | 'drinks';

const tabData: Record<TabKey, { name: string; price: string }[]> = {
  mains: [
    { name: 'Brisket Plate', price: 'AED 88' },
    { name: 'Beef Ribs Stack', price: 'AED 98' },
    { name: 'Pulled Beef Sando', price: 'AED 56' },
    { name: 'Smoked Chicken Quarter', price: 'AED 48' }
  ],
  sides: [
    { name: 'Mac & Cheese', price: 'AED 24' },
    { name: 'Jalapeno Slaw', price: 'AED 18' },
    { name: 'House Pickles', price: 'AED 14' },
    { name: 'Fries + BBQ Dust', price: 'AED 19' }
  ],
  drinks: [
    { name: 'Sweet Tea', price: 'AED 14' },
    { name: 'Lemonade', price: 'AED 14' },
    { name: 'Craft Cola', price: 'AED 16' },
    { name: 'Cold Brew', price: 'AED 18' }
  ]
};

const labels: { key: TabKey; text: string }[] = [
  { key: 'mains', text: 'Mains' },
  { key: 'sides', text: 'Sides' },
  { key: 'drinks', text: 'Drinks' }
];

export default function MenuPreviewTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>('mains');

  return (
    <div className="rounded-2xl border border-white/10 bg-charcoal/70 p-4 shadow-ember md:p-6">
      <div className="mb-4 grid grid-cols-3 rounded-xl border border-white/10 bg-black/30 p-1">
        {labels.map((label) => (
          <button
            key={label.key}
            type="button"
            onClick={() => setActiveTab(label.key)}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition md:text-base ${
              activeTab === label.key
                ? 'bg-heat text-charcoal'
                : 'text-cream/80 hover:bg-white/10'
            }`}
          >
            {label.text}
          </button>
        ))}
      </div>

      <ul className="space-y-3">
        {tabData[activeTab].map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/25 px-4 py-3"
          >
            <span className="text-sm font-medium text-cream md:text-base">{item.name}</span>
            <span className="whitespace-nowrap text-sm font-semibold text-heat md:text-base">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
