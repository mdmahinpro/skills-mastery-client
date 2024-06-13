/* eslint-disable react/jsx-key */
import { ClockIcon, StarIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ManageAllCourses() {
  const [courses, setCourses] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch(
        "https://tolet-backend-7e9u.onrender.com/tolets"
      );
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmDelete) {
      try {
        await fetch(`https://tolet-backend-7e9u.onrender.com/tolets/${_id}`, {
          method: "DELETE",
        });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        fetchCourses();
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="bg-white mb-8">
      {showToast && (
        <div className="toast toast-end">
          <div className="alert text-white bg-red-600 font-bold ">
            <span>Item deleted successfully.</span>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl text-center font-bold text-gray-900">
          Manage Courses
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {courses.map((course) => (
            <div className="mt-8">
              <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={course.image}
                      alt="img"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl h-20 font-semibold text-gray-800 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4">by {course.teacher}</p>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <UsersIcon className="h-5 w-5 text-gray-500 mr-2" />
                        <p className="text-gray-700">
                          {course.students} students
                        </p>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-5 w-5 text-gray-500 mr-2" />
                        <p className="text-gray-700">{course.length} hours</p>
                      </div>
                      <div className="flex items-center">
                        <StarIcon className="h-5 w-5 text-yellow-500 mr-2" />
                        <p className="text-gray-700">{course.rating}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <p className="text-2xl font-bold text-gray-800">
                        ${course.price}
                      </p>
                      <Link
                        to={`/courses/${course._id}`}
                        className="py-2 px-4 text-white bg-teal-600 rounded-md hover:bg-teal-700 transition duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageAllCourses;
