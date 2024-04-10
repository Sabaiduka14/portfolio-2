import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";

export default function Projects() {
  return (
    <main className="bg-gray-200 min-h-screen p-8 mt-6 rounded-lg">
      <h1 className="text-center text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            className="object-cover w-full h-64 md:h-80 lg:h-96"
            src={Project1}
            alt="Project 1"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Project 1</h2>
            <p className="text-gray-700 font-semibold">
              In Here You Can Sell Product Its Like An Ecommerce Website
            </p>
            <a
              className="font-semibold underline"
              href="https://samkaulebi123.netlify.app"
            >
              View Website
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            className="object-cover w-full h-64 md:h-80 lg:h-96"
            src={Project2}
            alt="Project 2"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Project 2</h2>
            <p className="text-gray-700 font-semibold">
              My First Ever Portfolio
            </p>
            <a
              className="font-semibold underline"
              href="https://sabaiduka1.netlify.app/"
            >
              View Website
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            className="object-cover w-full h-64 md:h-80 lg:h-96"
            src={Project3}
            alt="Project 3"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Project 3</h2>
            <p className="text-gray-700 font-semibold">
              You Can Save Your Contacts In Here, Create, Read, Update And
              Delete
            </p>
            <a
              className="font-semibold underline"
              href="https://contact-ge.netlify.app"
            >
              View Website
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            className="object-cover w-full h-64 md:h-80 lg:h-96"
            src={Project4}
            alt="Project 4"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Project 4</h2>
            <p className="text-gray-700 font-semibold">
              Its Like A Facebook App Where You Can Post Posts
            </p>
            <a
              className="font-semibold underline"
              href="https://book-ge.netlify.app"
            >
              View Website
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
