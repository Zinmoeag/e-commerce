<div class="fixed h-[2rem] top-0 left-0 right-0 text-slate-800 bg-white z-50">
    <div class="flex justify-end items-center mx-4">

        @if(auth()->check())
            <div class="flex gap-2">
                <a href="/user/profile" class="hover:text-skin-coffee">
                    User
                </a> 
                <span>/</span>
                <form method="POST" action="/auth/logout">
                    <button
                        type="submit"
                        class="hover:text-skin-coffee"
                    >   
                        Logout
                    </button>
                </form>
            </div>
        @else
            <div>
                <a href="/guest/login" class="hover:text-skin-coffee">
                    Login
                </a>
                <span>/</span>
                <a href="/guest/register" class="hover:text-skin-coffee">
                    Register
                </a>
                
            </div>
        @endif

    </div>
</div>