import {
  AcademicCapIcon,
  ClockIcon,
  CurrencyDollarIcon,
  PhotoIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function AddCourseCard() {
  const [showToast, setShowToast] = useState(false);

  const handleAddCourse = async (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const teacher = form.teacher.value;
    const students = form.students.value;
    const length = form.length.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const price = form.price.value;

    if (title && teacher && students && length && rating && image && price) {
      const course = {
        title,
        teacher,
        students,
        length,
        rating,
        image,
        price,
      };
      console.log(course);

      const confirmAdd = window.confirm(
        "Are you sure you want to add this course?"
      );

      if (confirmAdd) {
        try {
          const response = await fetch(
            `https://skills-mastery-server.onrender.com/courses`,
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(course),
            }
          );

          if (response.ok) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            form.reset();
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
          Course added successfully.
        </div>
      )}

      <form onSubmit={handleAddCourse} className="space-y-4">
        <div className="flex items-center">
          <AcademicCapIcon className="h-6 w-6 text-gray-500 mr-2" />
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="flex items-center">
          <UserGroupIcon className="h-6 w-6 text-gray-500 mr-2" />
          <input
            type="text"
            name="teacher"
            placeholder="Teacher"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="flex items-center">
          <UserGroupIcon className="h-6 w-6 text-gray-500 mr-2" />
          <input
            type="number"
            name="students"
            placeholder="Number of Students"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="flex items-center">
          <ClockIcon className="h-6 w-6 text-gray-500 mr-2" />
          <input
            type="text"
            name="length"
            placeholder="Course Length"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="flex items-center">
          <StarIcon className="h-6 w-6 text-gray-500 mr-2" />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            step="0.1"
            min="0"
            max="5"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="flex items-center">
          <PhotoIcon className="h-6 w-6 text-gray-500 mr-2" />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="flex items-center">
          <CurrencyDollarIcon className="h-6 w-6 text-gray-500 mr-2" />
          <input
            type="number"
            name="price"
            placeholder="Price"
            step="0.01"
            min="0"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCourseCard;
