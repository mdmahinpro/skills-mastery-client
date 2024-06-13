import {
  ArrowsPointingOutIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  CogIcon,
  CurrencyBangladeshiIcon,
  DeviceTabletIcon,
  DocumentArrowDownIcon,
  HomeIcon,
  MapIcon,
  PencilIcon,
  PhotoIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditCourse() {
  const [currentTolet, setCurrentTolet] = useState({});
  const [showToast, setShowToast] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://tolet-backend-7e9u.onrender.com/tolets/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentTolet(data));
  });

  const handleUpdateTolet = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const suitableFor = form.suitableFor.value;
    const image_url1 = form.image_url1.value;
    const image_url2 = form.image_url2.value;
    const image_url3 = form.image_url3.value;
    const location = form.location.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;

    const area = form.area.value;
    const balcony = form.balcony.value;
    const parking = form.parking.value;
    const floor = form.floor.value;
    const security = form.security.value;
    const summary = form.summary.value;

    // Get the current date and time
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = String(currentDate.getFullYear()).slice(-2);
    const availableFrom = `${day}:${month}:${year}`;

    if (
      title &&
      price &&
      suitableFor &&
      image_url1 &&
      image_url2 &&
      image_url3 &&
      location &&
      bedrooms &&
      bathrooms &&
      availableFrom &&
      area &&
      balcony &&
      parking &&
      floor &&
      security &&
      summary
    ) {
      const updatedTolet = {
        title,
        price,
        suitableFor,
        image_url1,
        image_url2,
        image_url3,
        location,
        bedrooms,
        bathrooms,
        availableFrom,
        area,
        balcony,
        parking,
        floor,
        security,
        summary,
      };
      console.log(updatedTolet);

      const confirmAdd = window.confirm(
        "Are you sure you want to update this to-let?"
      );

      if (confirmAdd) {
        try {
          const response = await fetch(
            `https://tolet-backend-7e9u.onrender.com/tolets/${id}`,
            {
              method: "PATCH",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify(updatedTolet),
            }
          );

          if (response.ok) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
            form.reset(); // Reset the form after successful submission
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
            <span>To-let updated successfully.</span>
          </div>
        </div>
      )}
      <div>
        <form onSubmit={handleUpdateTolet} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center text-sm text-gray-600 col-span-2">
              <PencilIcon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="title"
                id="title"
                defaultValue={currentTolet.title}
                className="block w-full border-2 rounded-md h-10 px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Title"
                required
              />
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <UserGroupIcon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="suitableFor"
                id="suitableFor"
                defaultValue={currentTolet.suitableFor}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Suitable for"
                required
              />
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <DeviceTabletIcon className="h-10 w-10 mr-2" />
              <input
                type="number"
                name="bedrooms"
                id="bedrooms"
                defaultValue={currentTolet.bedrooms}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Bedrooms"
                required
              />
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CogIcon className="h-10 w-10 mr-2" />
              <input
                type="number"
                name="bathrooms"
                id="bathrooms"
                defaultValue={currentTolet.bathrooms}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Bathrooms"
                required
              />
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CalendarDaysIcon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="availableFrom"
                id="availableFrom"
                defaultValue={currentTolet.availableFrom}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Available From"
                required
              />
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <ArrowsPointingOutIcon className="h-10 w-10 mr-2" />
              <input
                type="number"
                name="area"
                id="area"
                defaultValue={currentTolet.area}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Area (sqft)"
                required
              />
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <HomeIcon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="balcony"
                id="balcony"
                defaultValue={currentTolet.balcony}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Balcony"
                required
              />
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <TruckIcon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="parking"
                id="parking"
                defaultValue={currentTolet.parking}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Parking"
                required
              />
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <BuildingOffice2Icon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="floor"
                id="floor"
                defaultValue={currentTolet.floor}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Floor"
                required
              />
            </div>
            <div className="flex items-center text-gray-600">
              <ShieldCheckIcon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="security"
                id="security"
                defaultValue={currentTolet.security}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Security"
                required
              />
            </div>
            <div className="flex items-center text-gray-600">
              <MapIcon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="location"
                id="location"
                defaultValue={currentTolet.location}
                className="block w-full border-2 h-10 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Location"
                required
              />
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <PhotoIcon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="image_url1"
                id="image_url1"
                defaultValue={currentTolet.image_url1}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Image URL 1"
                required
              />
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <PhotoIcon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="image_url2"
                id="image_url2"
                defaultValue={currentTolet.image_url2}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Image URL 2"
                required
              />
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <PhotoIcon className="h-10 w-10 mr-2" />
              <input
                type="text"
                name="image_url3"
                id="image_url3"
                defaultValue={currentTolet.image_url3}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Image URL 3"
                required
              />
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CurrencyBangladeshiIcon className="h-10 w-10 mr-2" />
              <input
                type="number"
                name="price"
                id="price"
                defaultValue={currentTolet.price}
                className="block w-full h-10 border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Price"
                required
              />
            </div>
          </div>

          <div className="flex items-start text-gray-600">
            <DocumentArrowDownIcon className="h-10 w-10 mr-2" />
            <textarea
              name="summary"
              id="summary"
              rows="4"
              defaultValue={currentTolet.summary}
              className="block w-full h-20  border-2 rounded-md px-2 outline-none outline-2 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Summary"
              required
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              UPDATE TO-LET
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCourse;
