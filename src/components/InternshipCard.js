// components/InternshipCard.js
import { FaMapMarkerAlt } from "react-icons/fa";

export default function InternshipCard() {
  return (
    <div className="bg-white shadow-md rounded-md p-4 w-full max-w-md">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="bg-blue-100 text-blue-600 font-bold px-3 py-2 rounded-md">
            HS
          </div>
          <div>
            <h3 className="font-semibold text-lg">Assistant Manager Direct Sales</h3>
            <p className="text-sm text-gray-600">Hexadecimal Software</p>
          </div>
        </div>
        <button className="text-sm text-blue-600 hover:underline font-medium">
          Easy Apply →
        </button>
      </div>

      <p className="text-sm text-gray-700 mt-3 line-clamp-3">
        Build rapport with contacts and understand where the prospect is in the buying process. Identify opportunities that meet a minimum qualification criteria for the sales team...
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">Full Time</span>
        <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">On-site</span>
        <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">Entry Level</span>
      </div>

      <div className="flex justify-between items-center mt-4 border-t pt-3">
        <div className="flex items-center text-sm text-gray-600 gap-1">
          <FaMapMarkerAlt className="text-gray-500" />
          Sector 142, Noida
        </div>
        <div className="text-sm text-gray-700">Applicants: <span className="font-medium">213</span></div>
      </div>
    </div>
  );
}
