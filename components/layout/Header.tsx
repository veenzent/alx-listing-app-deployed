// components/layout/Header.tsx
import React from "react";
import { Search } from "lucide-react";

const categories = [
  "Rooms", "Mansion", "Countryside", "Villa", "Tropical",
  "New", "Amazing pool", "Beach house", "Island", "Camping",
  "Apartment", "House", "Lakefront", "Farm house", "Treehouse",
  "Cabins", "Castles", "Lakeside"
];

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      {/* TOP BAR */}
      <div className="w-full bg-teal-600 text-white text-sm py-2 flex justify-center">
        <span>🧳 Overseas trip? Get the latest information on travel guides</span>
        <button className="ml-3 bg-black text-white px-2 py-1 rounded text-xs">
          More Info
        </button>
      </div>

      {/* MAIN HEADER */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div className="text-3xl font-bold">alx</div>

        {/* SEARCH BAR */}
        <div className="border rounded-full px-4 py-2 flex items-center gap-4 shadow-sm w-[60%]">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Location</span>
            <input
              type="text"
              placeholder="Search for destination"
              className="outline-none text-sm"
            />
          </div>

          <div className="h-6 border-l" />

          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Check in</span>
            <span className="text-sm text-gray-400">Add date</span>
          </div>

          <div className="h-6 border-l" />

          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Check out</span>
            <span className="text-sm text-gray-400">Add date</span>
          </div>

          <div className="h-6 border-l" />

          <div className="flex flex-col">
            <span className="text-xs text-gray-500">People</span>
            <span className="text-sm text-gray-400">Add guest</span>
          </div>

          <button className="bg-yellow-400 p-2 rounded-full">
            <Search size={20} />
          </button>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-full">
            Sign in
          </button>
          <button className="px-4 py-2 border rounded-full">Sign up</button>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="flex gap-6 px-6 py-4 overflow-x-auto text-sm text-gray-700 whitespace-nowrap">
        {categories.map((cat) => (
          <button key={cat} className="flex flex-col items-center">
            {/* Placeholder icon - replace with actual icons later */}
            <span className="w-8 h-8 border rounded-full mb-1" />
            {cat}
          </button>
        ))}
      </div>
    </header>
  );
}
