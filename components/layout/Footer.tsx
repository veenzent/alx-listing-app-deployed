// import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-10 py-12 mt-12">
      <div className="flex justify-between">

        {/* LEFT SECTION */}
        <div className="max-w-sm">
          <h2 className="text-3xl font-bold mb-3">alx</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From city
            apartments to countryside retreats, ALX connects you to the perfect
            place to stay.
          </p>
        </div>

        {/* MIDDLE - EXPLORE */}
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Apartments in Dubai</li>
            <li>Hotels in New York</li>
            <li>Villa in Spain</li>
            <li>Mansion in Indonesia</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>About us</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Customers</li>
            <li>Brand</li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h3 className="font-semibold mb-3">Help</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Support</li>
            <li>Cancel booking</li>
            <li>Refunds Process</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 flex justify-between text-sm text-gray-500">
        <span>
          Some hotels require cancellation more than 24 hours before check-in.
        </span>

        <div className="flex gap-6">
          <span>Terms of Service</span>
          <span>Policy service</span>
          <span>Cookies Policy</span>
          <span>Partners</span>
        </div>
      </div>
    </footer>
  );
}
