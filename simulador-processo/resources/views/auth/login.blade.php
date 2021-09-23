<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->


    <style>
        * {
            box-sizing: border-box;
            margin: 0;
        }

        body {
            font-family: 'Nunito', sans-serif;
            height: 100vh;
            font-size: calc(1vw + 8px);
        }

        .header {
            position: relative;
            height: 50vh;
            background-image: url('images/loginBg.jpg');
            background-size: cover;
            background-position-y: 100%;
            text-align: center;
        }

        h1 {
            position: absolute;
            top: 50%;
            left: 10%;
            transform: translateY(-50%);
            font-weight: 800;
            color: #1a202c;
            text-shadow: 1px 1px 5px #a0aec0;
        }

        .content {
            font-size: calc(1vw + 4px);
            height: 50vh;
        }
    </style>
</head>

<body>
    <header class="header">
        <h1>Simulador de Processo Judicial</h1>
    </header>
    <section class="content container">
        <div class="offset-2 col-md-8 p-3">

            <div class="card-body">
                <form method="POST" action="{{ route('login') }}">
                    @csrf

                    <div class="form-group row">
                        <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-mail') }}</label>

                        <div class="col-md-6">
                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Senha') }}</label>

                        <div class="col-md-6">
                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                            @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-6 offset-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                <label class="form-check-label" for="remember">
                                    {{ __('Lembrar-me') }}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row mb-0">
                        <div class="col-md-8 offset-md-4">
                            <button type="submit" class="btn btn-primary">
                                {{ __('Login') }}
                            </button>

                            <a class="btn btn-link" href="{{ route('register') }}">
                                {{ __('ou cadastre-se') }}
                            </a>
                            <!-- @if (Route::has('password.request'))
                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                {{ __('Esqueceu sua senha?') }}
                            </a>
                            @endif -->
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</body>

</html>