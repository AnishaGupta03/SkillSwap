

function App() {
  

  return (
  <div className="bg-gray-100 min-h-screen">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to the Skill Exchange Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">
            We are a platform that allows you to exchange skills with other users.
                </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">How it works</h2>  
          <p className="text-gray-700">
            It's easy! Just create an account, search for skills you want to learn, and start exchanging skills with other users.
                </p>
        </div>
      </div>
    </div>
  </div>

  
  )
}

export default App
