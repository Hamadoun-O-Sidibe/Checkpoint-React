function App() {
 
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <nav className="flex items-center justify-between bg-white px-8 py-5 shadow">
        <span className="text-2xl font-bold text-blue-600">
          TodoList 
        </span>
        <div className="flex items-center gap-6"> 
        <a href='#' className="font-medium text-gray-700 hover:text-blue-600">Accueil</a>
        <a href='#about'className="font-medium text-gray-700 hover:text-blue-600" >A Propos </a>
        <a href="#contact" className="font-medium text-gray-700 hover:text-blue-600">
            Contact</a>
</div>
      </nav>
      <main className="flex-1">
      <section id="about" className="mt-10">
        <h1 className="text-2xl font-bold text-gray-800 uppercase px-4 py-2 text-center">
          Organise tes tâches simplement
        </h1>
        <p className="text-xl font-light px-3 py-2 text-center leading-relaxed ">
       Planifie tes activités, organise ton travail et atteins tes objectifs chaque jour.
        </p>
          <button className="btn btn-primary  mt-10 mx-auto block">Commencer maintenant</button>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-2 mt-10 ">
      <div className="h-full text-center border rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition ease-in duration-300 hover:bg-cyan-50 ">
        <h3 className="text-xl font-bold text-gray-800 mb-2 ">
        Gestion des tâches:
        </h3>
        <p className=" text-gray-800 ">
         ajoute et gère tes tâches quotidiennes.
        </p>
      </div>
      <div className="border rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition ease-in duration-300 hover:bg-cyan-50">
        <h3 className="text-xl font-bold text-gray-800 mb-3">
         Suivi des objectifs:
        </h3>
        <p className=" text-gray-800 ">
         suis tes progrès et atteins tes objectifs.
        </p>
      </div>
      <div className="border rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition ease-in duration-300 hover:bg-cyan-50 ">
        <h3 className="text-xl font-bold text-gray-800 mb-3 ">
          organisation:
        </h3>
        <p className=" text-gray-800 ">
          organise tes activités et planifie ton travail
        </p>
      </div>
      </section>
      </main>
      <footer className="bg-gray-800 text-white text-center p-6 mt-20 lg:mt-10">
        <p>@ 2026 todoList -Tous droits réservés</p>
      </footer>
    </div>
  )
}

export default App
