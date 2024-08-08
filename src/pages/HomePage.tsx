
function HomePage() {
  return (
    <main className="px-4 sm:px-10 py-3 bg-zinc-200 dark:bg-zinc-900 ">
      <section className="mt-8">
        <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Node.js con Typescript</h1>
        <img className=" h-52 object-cover rounded-lg" src="/node-type.png" alt="imagen de nodejs con ts" />
        <p className="text-lg my-8 text-center w-3/5">
          A continuación se muestra una guía de como integrar Node.js con Typescript y la creación de un servidor web con Express.
        </p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
