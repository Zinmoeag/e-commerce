<div class="fixed top-0 left-0 right-0 z-40 text-skin-coffee shadow-lg fixed">
            <div class="bg-white shadow-lg border-b-4 border-skin-coffee/50 backdrop-blur-sm">
                
                <div class="flex justify-between py-5 md:px-10 px-4">
                    <div class="flex gap-4">
                        <div>
                            <button
                                class="md:hidden"
                            >
                            </button>
                        </div>

                        <div class="brand text-xl uppercase font-bold text-blue-500 flex items-center">
                            <Link to="/">
                                <h4>LaraCamp</h4>
                            </Link>
                        </div>
                    </div>



                    <div class="md:translate-y-0 transition-all duration-2 searcher lg:w-[35rem] md:w-[20rem] w-[100%] 
                                     absolute md:relative left-0 top-[4rem] md:top-0 my-2 py-2 md:m-0 md:p-0 z-10">
                        <Searcher
                            setIsShow={setIsMobileSearchBarShow}
                        />
                    </div>

                    <div class="flex gap-8">
                        <div class="md:hidden">
                        </div>
                    </div>

                </div>
            </div>

            <div 
                class="translate-x-[-100%]
                     md:translate-x-0 md:text-white text-slate-600 md:bg-slate-800/70 bg-slate-100 py-1 px-8 
                     md:relative md:h-fit fixed top-0 h-[100vh] w-[80%] md:w-full left-0 transition-all duration-2"
                >
                <div class="absolute top-4 right-4 md:hidden">
                    <button
                        type="button"
                        class="text-red-600"
                    >
                        close
                    </button>
                </div>

                <div class="flex items-center justify-center mt-[5rem] md:m-0">
                    <nav class="flex flex-col md:flex-row gap-8 justify-center items-center"> 
                        <a href="/pos/brands" class="hover:text-skin-secondary">Brands</a>
                        <a href="/pos/contact" class="hover:text-skin-secondary">Contact Us</a>
                        <a href="/pos/about" class="hover:text-skin-secondary">About Us</a>
                        <a href="/pos/sign-up" class="hover:text-skin-secondary">Sign up</a>
                    </nav>
                </div>
            </div>
        </div>