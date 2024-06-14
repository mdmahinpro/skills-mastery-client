import Hero from "../../components/Hero";
import CourseList from "../../components/home/CourseList";
import Contact from "../contact/Contact";
import Features from "../features/Features";
import Testimonial from "../testimonial/Testimonial";

function Home() {
  return (
    <div className="bg-gray-900 pb-8">
      <Hero />
      <CourseList />
      <Features />
      <Testimonial />
      {/* <AboutUs /> */}
      <Contact />
    </div>
  );
}

export default Home;
