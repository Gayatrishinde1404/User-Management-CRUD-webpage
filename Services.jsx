function Services({ heading, serviceList }) {
    return (
        <div className="p-6 bg-blue-60">
            <h1 className="text-3xl font-bold mb-4">{heading}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceList.map((service, index) => (
                    <div key={index} className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-40 object-cover rounded-lg mb-2" 
                        />
                        <h2 className="text-2xl font-semibold">{service.title}</h2>
                        <p className="text-md">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;

