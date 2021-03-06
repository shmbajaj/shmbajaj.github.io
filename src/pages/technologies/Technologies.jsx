import { technologies } from "./technologies.data";

function Technologies() {
  return (
    <section
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies
          </p>
          <p className="py-6">
            These are the technologies, I have experienced and built projects
            with.{" "}
          </p>
        </div>

        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))]  sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, source, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={source} alt="" className="w-20 mx-auto" />
              <p className="mt-4 capitalize">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Technologies };
