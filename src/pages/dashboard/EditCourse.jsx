import {
  ClockIcon,
  CurrencyDollarIcon,
  PencilIcon,
  PhotoIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditCourse() {
  const [currentCourse, setCurrentCourse] = useState({});
  const [showToast, setShowToast] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://skills-mastery-server.onrender.com/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentCourse(data));
  }, [id]);

  const handleUpdateCourse = async (e) => {
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

      const confirmUpdate = window.confirm(
        "Are you sure you want to update this course?"
      );

      if (confirmUpdate) {
        try {
          const response = await fetch(
            `https://skills-mastery-server.onrender.com/courses/${id}`,
            {
              method: "PATCH",
              headers: { "Content-type": "application/json" },
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
    <div className="isolate rounded-md shadow-sm">
      {showToast && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <span>Course updated successfully.</span>
          </div>
        </div>
      )}
      <div>
        <form onSubmit={handleUpdateCourse} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center text-sm text-gray-600">
              <PencilIcon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="title"
                id="title"
                defaultValue={currentCourse.title}
                className="block w-full border-2 rounded-md h-10 px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Title"
                required
              />
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <UserGroupIcon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="teacher"
                id="teacher"
                defaultValue={currentCourse.teacher}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Teacher"
                required
              />
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <UserGroupIcon className="h-10 w-10 mr-2" />
              <input
                type="number"
                name="students"
                id="students"
                defaultValue={currentCourse.students}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Number of Students"
                required
              />
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <ClockIcon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="length"
                id="length"
                defaultValue={currentCourse.length}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Course Length"
                required
              />
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <StarIcon className="h-10 w-10 mr-2" />
              <input
                type="number"
                name="rating"
                id="rating"
                defaultValue={currentCourse.rating}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Rating"
                required
              />
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <PhotoIcon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="image"
                id="image"
                defaultValue={currentCourse.image}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Image URL"
                required
              />
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <CurrencyDollarIcon className="h-10 w-10 mr-2" />
              <input
                type="number"
                name="price"
                id="price"
                defaultValue={currentCourse.price}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Price"
                required
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              UPDATE COURSE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCourse;
