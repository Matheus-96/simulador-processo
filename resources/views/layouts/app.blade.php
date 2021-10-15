<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token --><meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ __('SPJ - Simulador de Processo Judicial') }}</title>
    <!-- Scripts --><script src="{{ asset('js/app.js') }}" defer></script>
    <!-- Fonts --><link rel="dns-prefetch" href="//fonts.gstatic.com">
    <!-- Styles --><link href="/css/app.css" rel="stylesheet">
</head>
<body class="backgroundProjeto">
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
            <div class="container-sm">
                <div>
                    <a class="navbar-brand">
                        <!-- {{ config('app.name', 'SPJ - Simulador de Processo Judicial') }} -->
                        {{ __('SPJ - Simulador de Processo Judicial') }}
                    </a>
                </div>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <!-- <ul class="navbar-nav ml-4 mr-3">
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('home') }}">{{ __('Home') }}</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav mr-3">
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('pesquisarProcesso') }}">{{ __('Pesquisar Processo Por:') }}</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav mr-3">
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('cadastroProcessos') }}">{{ __('Cadastrar Processo') }}</a>
                        </li>
                    </ul> -->
                    <!-- <ul class="navbar-nav mr-3">
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('login') }}">{{ __('Processos ') }}</a>
                        </li>
                    </ul> -->

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>
<<<<<<< HEAD

        

        <main class="py-4">
            @yield('content')
        </main>
=======
        <nav class="navbar navbar-light bg-light shadow">
            <!-- <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Menu</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div> -->
        </nav>
        <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">MENU</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div> -->
            <div class="col-md-2 mt-5">
                <ul class="nav flex-column">
                    <ul class="navbar-nav ml-4 mr-3">
                        <li class="nav-item">
                            <a class="linkMenuLateral" href="{{ route('home') }}">{{ __('Home') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="linkMenuLateral" href="{{ route('pesquisarProcesso') }}">{{ __('Pesquisar Processo Por:') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="linkMenuLateral" href="{{ route('cadastroProcessos') }}">{{ __('Cadastrar Processo') }}</a>
                        </li>
                    </ul> 
                </ul>
            </div>
            <div class="col-md-10">
                <main class="py-4">
                    @yield('content')
                </main>
            </div>
>>>>>>> e45b121b4ccb77f4b6cbd49623a6b492452695b8
    </div>
</body>
</html>
