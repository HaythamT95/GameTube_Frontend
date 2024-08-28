

// src/components/Header.tsx

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-md p-4 z-50 flex items-center justify-between">
            {/* Title on the left */}
            <a href="/"><h1 className="text-left font-bold">GameTube</h1></a>

            <div className="mx-4 flex justify-center items-center w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-lg focus:outline-none text-black"
                />
            </div>

            {/* Login button on the right */}
            <button className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                Login
            </button>
        </header>
    );
}
