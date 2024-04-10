export default function Home() {
    return (
      <main className="w-full h-[500px] sm:h-[850px] md:px-12 px-6 bg-gray-200 rounded-lg mt-12 flex justify-center py-16">
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold">👋 Hi, I'm Saba.</h1>
          <p className="text-gray-500 font-semibold text-xl">
            I'm a software engineer based in Georgia Tbilisi.<br /> I'm currently
            learning NodeJS, MongoDB, and Next.js.
          </p>
          <img className=" object-cover w-full  mt-6 rounded-lg" src="https://mishpacha.com/wp-content/uploads/2022/07/So-You-Want-to-Be-a%E2%80%A6-Web-Developer-R.jpg" />
        </div> 
      </main>
    );
  }
  