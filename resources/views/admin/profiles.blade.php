@extends('layouts.admin')

@section('title', 'Профили')

@section('content')
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Профили</h2>
        <table class="min-w-full bg-white">
            <thead class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                    <th class="py-3 px-6 text-left">ID</th>
                    <th class="py-3 px-6 text-left">Име</th>
                    <th class="py-3 px-6 text-left">Е-пошта</th>
                    <th class="py-3 px-6 text-left">Телефон</th>
                    {{-- <th class="py-3 px-6 text-left">Дата на креирање</th> --}}
                </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
                @foreach($users as $user)
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left">{{ $user->id }}</td>
                        <td class="py-3 px-6 text-left">{{ $user->name }}</td>
                        <td class="py-3 px-6 text-left">{{ $user->email }}</td>
                        <td class="py-3 px-6 text-left">{{ $user->phone }}</td>
                        {{-- <td class="py-3 px-6 text-left">{{ $user->created_at }}</td> --}}
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
