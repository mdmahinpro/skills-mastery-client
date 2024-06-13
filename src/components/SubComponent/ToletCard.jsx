import {
  ArrowsPointingOutIcon,
  CalendarDaysIcon,
  CogIcon,
  MapIcon,
  TvIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import cardImg from "../../assets/cardImg.jpg";

function ToletCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <div className="relative h-72 w-full overflow-hidden rounded-t-lg">
          <img
            src={cardImg}
            alt="House image"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Name of the Property
          </h3>
          <p className="text-sm text-gray-500">Elegant Colors</p>
          <div className="grid grid-cols-2 gap-4 my-2">
            <p className="flex items-center text-sm text-gray-700">
              <MapIcon
                className="h-5 w-5 text-gray-500 mr-2"
                aria-hidden="true"
              />
              Location City
            </p>
            <p className="flex items-center text-sm text-gray-700">
              <UserGroupIcon
                className="h-5 w-5 text-gray-500 mr-2"
                aria-hidden="true"
              />
              Suitable for Bachelors
            </p>
            <p className="flex items-center text-sm text-gray-700">
              <TvIcon
                className="h-5 w-5 text-gray-500 mr-2"
                aria-hidden="true"
              />
              3 Beds
            </p>
            <p className="flex items-center text-sm text-gray-700">
              <CogIcon
                className="h-5 w-5 text-gray-500 mr-2"
                aria-hidden="true"
              />
              2 Baths
            </p>
            <p className="flex items-center text-sm text-gray-700">
              <ArrowsPointingOutIcon
                className="h-5 w-5 text-gray-500 mr-2"
                aria-hidden="true"
              />
              1500 sqft
            </p>
            <p className="flex items-center text-sm text-gray-700">
              <CalendarDaysIcon
                className="h-5 w-5 text-gray-500 mr-2"
                aria-hidden="true"
              />
              June 2024
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-end  p-4">
          <p className="relative -bottom-10 text-2xl font-bold text-gray-800">
            34000 <span className="text-lg">৳</span>
          </p>
        </div>
      </div>
      <div className="p-4 my-4">
        <Link
          to={`/courses/3`}
          className="flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-8 py-2 text-sm font-medium text-white hover:bg-gray-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ToletCard;
