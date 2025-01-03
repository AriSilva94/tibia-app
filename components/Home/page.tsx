export default function Main() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
          Tibia App
        </h1>
        <h2 className="text-xl text-gray-700 sm:text-2xl mb-8">
          Save and track your Tibia characters progress.
        </h2>
        <p className="text-md text-gray-500 mb-6">
          Welcome to Tibia App! Manage your characters and keep track of their
          progress seamlessly. Join the community and make the most of your
          Tibia experience.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Get Started
          </button>
          <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
