<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin - @yield('title')</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"></script>
</head>

<body class="bg-gray-100 tracking-widest">
    <div class="flex min-h-screen">
        <div class="bg-[#3CA082] text-white w-64 p-6 flex flex-col justify-between">
            <div>
                <div class="flex items-center justify-center mb-8">
                    {{-- <img src="{{ asset('images/download.png') }}" class="w-full" alt="Logo" /> --}}
                </div>
                <nav>
                    <a href="{{ route('admin.profiles') }}"
                        class="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2">
                        <i class="fas fa-user"></i>
                        <span class="ml-2">Профили</span>
                    </a>
                    <a href="{{ route('admin.policies') }}"
                        class="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2">
                        <i class="fas fa-file-alt"></i>
                        <span class="ml-2">Полиси</span>
                    </a>
                    <a href="{{ route('admin.damages') }}"
                        class="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2">
                        <i class="fas fa-exclamation-triangle"></i>
                        <span class="ml-2">Штети</span>
                    </a>
                    <a href="{{ route('admin.invoices') }}"
                        class="flex items-center py-2 px-4 hover:bg-[#007566] rounded-lg mb-2">
                        <i class="fas fa-receipt"></i>
                        <span class="ml-2">Фактури</span>
                    </a>
                </nav>
            </div>
        </div>

        <section id="dashboard" class="p-6">
            <h2 class="text-2xl font-bold mb-4">Админ Панел</h2>
        </section>

        <section class="p-5 w-2/3 flex justify-center relative ">
            <h2 class="text-center absolute top-[30%] left-[20%] right-[35%] items-center font-bold">Оваа страна е админ панел каде што можете да ги видите сите информации околу профилите на корисниците, полисите, штетите, како и некои податоци околу фактурите.</h2>
        </section>


        @section('content')
            <div class="p-6">
                <h2 class="text-2xl font-bold mb-4">Штети</h2>

            </div>
        @endsection
