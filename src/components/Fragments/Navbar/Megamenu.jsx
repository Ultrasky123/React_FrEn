const Megamenu = () => {
    return(
                                <div className="group">
                                <button className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">Product</button>
                                <div className="hidden group-hover:flex flex-col absolute left-0 top-16 p-10 w-full bg-white z-20
                                text-black duration-300">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                        <div className="flex flex-col">
                                        <h3 className="mb-4 text-2xl text-pink-400">Beauty Products</h3>
                                        <a href="#" className="hover:underline hover:text-pink-400">Makeup Kit</a>
                                        <a href="#" className="hover:underline hover:text-pink-400">Lotion</a>
                                        <a href="#" className="hover:underline hover:text-pink-400">Body Wash</a>
                                        <a href="#" className="hover:underline hover:text-pink-400">Face Pack</a>
                                        </div>
                                        <div className="flex flex-col">
                                        <h3 className="mb-4 text-2xl text-pink-400">Beauty Products</h3>
                                        <a href="#" className="hover:underline hover:text-pink-400">Makeup Kit</a>
                                        <a href="#" className="hover:underline hover:text-pink-400">Lotion</a>
                                        <a href="#" className="hover:underline hover:text-pink-400">Body Wash</a>
                                        <a href="#" className="hover:underline hover:text-pink-400">Face Pack</a>
                                        </div>
                                        <div className="flex flex-col">
                                        <h3 className="mb-4 text-2xl text-pink-400">Beauty Products</h3>
                                        <a href="#" className="hover:underline hover:text-pink-400">Makeup Kit</a>
                                        <a href="#" className="hover:underline hover:text-pink-400">Lotion</a>
                                        <a href="#" className="hover:underline hover:text-pink-400">Body Wash</a>
                                        <a href="#" className="hover:underline hover:text-pink-400">Face Pack</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
    )   
}
export default Megamenu