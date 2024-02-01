export default function Footer(){
    return (
<footer className="bg-white">
    <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
            <a href="#">
                <img className="w-auto h-10" src="/isishare.png" alt=""/>
            </a>

            <div className="flex flex-wrap justify-center mt-6 -mx-4">
                <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Lorem </a>
                
                <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Lorem </a>
                
                <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Lorem </a>

                <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Lorem </a>
            </div>

        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright 2024.</p>
        </div>
    </div>
</footer>
    )
}