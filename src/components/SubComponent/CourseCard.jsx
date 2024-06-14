/* eslint-disable react/prop-types */
import { ClockIcon, StarIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  const { _id, title, teacher, students, length, rating, image, price } =
    course;

  return (
    <div className="mt-8">
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={image}
              alt="img"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl h-20 font-semibold text-gray-800 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 mb-4">by {teacher}</p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <UsersIcon className="h-5 w-5 text-gray-500 mr-2" />
                <p className="text-gray-700">{students} students</p>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-gray-500 mr-2" />
                <p className="text-gray-700">{length} hours</p>
              </div>
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-yellow-500 mr-2" />
                <p className="text-gray-700">{rating}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mb-6">
              <p className="text-2xl font-bold text-gray-800">${price}</p>
              <Link
                to={`/courses/${_id}`}
                className="py-2 px-4 text-white bg-gray-900 rounded-md hover:bg-teal-500  transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
