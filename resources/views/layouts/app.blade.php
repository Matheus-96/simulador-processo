<!doctype html>
<!-- <html lang="{{ str_replace('_', '-', app()->getLocale()) }}"> -->
<html lang="pt-br">
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
            <div class="container-fluid mx-5 my-1">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="mr-5">
                    <div class="mr-5 title2 textColorYellow">
                        <!-- {{ config('app.name', 'SPJ - Simulador de Processo Judicial') }} -->
                        {{ __('SPJ - Simulador de Processo Judicial') }}
                    </div>
                </div>
                <div class="mr-5">esp</div>
                <div class="collapse navbar-collapse ml-5" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto ml-5 mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('home') }}"><i class="fas fa-home"></i>{{ __(' Home') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('cadastroProcessos') }}"><i class="fas fa-file-alt"></i>{{ __('  Cadastrar Processo') }}</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex">
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
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user"></i><span>    </span>{{ Auth::user()->name }}
                                </a>

                                <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();"><i class="fas fa-sign-out-alt"></i>
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </ul>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>
        <nav class="navbar navbar-light bg-light shadow">
        </nav>
        <main class="mx-5 py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>