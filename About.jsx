function About({ heading, profession, description, image }) {
    return (
        <div className="flex items-center space-x-6  p-8 bg-blue-50 rounded-lg shadow-lg">
            <img 
                src={image} 
                alt="Profile" 
                className="w-48 h-48 rounded-full object-cover border-4 border-blue-500" 
            />
            <div className="text-left">
                <h2 className="text-3xl font-bold text-orange-900">{heading}</h2>
                <h1 className="text-2xl font-semibold text-gray-700 mt-2">{profession}</h1>
                <p className="text-lg text-zinc-600 mt-4">{description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    Hire Me
                </button>
            </div>
        </div>
    );
}
export default About;

