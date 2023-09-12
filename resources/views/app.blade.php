<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>laracamp</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <!-- <link rel="stylesheet" href="{{ asset('storage/pos/pos.css') }}"> -->


    @yield('style')

        @viteReactRefresh
        @vite(['resources/js/app.jsx',"resources/css/app.css"])
    </head>
    <body>
        <div>
            <div id="pos">
                <!-- navbar -->
                    @section('navbar')
                    @include('pos.layouts.navbar')
                    @show
                <!-- end navbar -->

                <div id="app">
                    @yield('content')
                    <!-- Point of Sale -->
                </div>
            </div>
        </div>


    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    @yield('script')
    </body>
</html>
