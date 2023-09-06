<nav class="navbar navbar-expand-lg bg-danger">
    <div class="container-fluid">
        <a class="navbar-brand" href="{{ url('/pos') }}">Laracamp</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">        
            <li class="nav-item">
                <a class="nav-link" href="{{ url('/pos/cart') }}">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="badge bg-dark" id="item-qty">0</span>
                </a>                
            </li>
            <li class="nav-item">                
                @if(Auth::user())
                    <a class="nav-link" href="{{ url('/pos/logout') }}">Sign Out</a>
                @endif

                @if(!Auth::user())
                    <a class="nav-link" href="{{ url('/pos/sign-in') }}">Sign In</a>
                @endif                
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ url('/pos/sign-up') }}">Sign Up</a>
            </li>                                    
        </ul>
        </div>
    </div>
</nav>