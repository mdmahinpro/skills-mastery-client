import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import MainLayout from "../Layouts/MainLayout";
import CourseDetails from "../components/SubComponent/CourseDetails";
import AboutUs from "../pages/about-us/AboutUs";
import Contact from "../pages/contact/Contact";
import AddCourseCard from "../pages/dashboard/AddCourseCard";
import EditTolet from "../pages/dashboard/EditCourse";
import ManageAllTolets from "../pages/dashboard/ManageAllCourses";
import ErrorPage from "../pages/error/ErrorPage";
import Features from "../pages/features/Features";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Registration from "../pages/registration/Registration";
import PrivateRoute from "../routes/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // MainLayout wraps around child components
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", // Root path
        element: <Home />, // Home component
      },
      {
        path: "contact", // Contact path
        element: <Contact />, // Contact component
      },
      {
        path: "login", // Login path
        element: <Login />, // Login component
      },
      {
        path: "register", // Registration path
        element: <Registration />, // Registration component
      },
      {
        path: "about-us", // AboutUs path
        element: <AboutUs />, // AboutUs component
      },
      {
        path: "Features", // Features path
        element: <Features />, // Features component
      },

      {
        path: "courses/:id",
        element: <CourseDetails />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://skills-mastery-server.onrender.com/courses/${params.id}`
          );
          if (!response.ok) {
            throw new Error(`Could not fetch course with id ${params.id}`);
          }
          return response.json();
        },
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/all-courses",
        element: (
          <PrivateRoute>
            <ManageAllTolets />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-course",
        element: (
          <PrivateRoute>
            <AddCourseCard />
          </PrivateRoute>
        ),
      },
      {
        path: `/dashboard/edit-course/:id`,
        element: (
          <PrivateRoute>
            <EditTolet />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
