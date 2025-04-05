const Home = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-indigo-500">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
                <h1 className="text-xl font-bold text-center mb-2">File Upload!</h1>
                <p className="text-center text-gray-500 text-sm mb-4">HTML Available for Bootstrap and Tailwind CSS</p>
                
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" placeholder="mail@gmail.com" className="w-full p-2 border rounded-md mb-4" />
                
                <label className="block text-sm font-medium text-gray-700">Attach Document</label>
                <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center cursor-pointer hover:border-blue-500">
                    <p className="text-gray-500 text-sm">Drag and drop file here<br/> or <span className="text-blue-500 font-semibold">select a file</span> from your computer</p>
                </div>
                
                <p className="text-xs text-gray-400 mt-2">File type: doc, pdf, types of image</p>
                
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition">Upload</button>
            </div>
        </div>
    );
};

export default Home;
