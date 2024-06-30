@extends('layouts.admin')

@section('title', 'Полиси')

@section('content')
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Полиси</h2>
        <table class="min-w-full bg-white">
            <thead class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                    {{-- <th class="py-3 px-6 text-left">ID</th> --}}
                    <th class="py-3 px-6 text-left">Тип</th>
                    <th class="py-3 px-6 text-left">Број на полиса</th>
                    {{-- <th class="py-3 px-6 text-left">Осигуреници</th> --}}
                    <th class="py-3 px-6 text-left">Од</th>
                    <th class="py-3 px-6 text-left">До</th>
                    <th class="py-3 px-6 text-left">Цена</th>
                    <th class="py-3 px-6 text-left">Платено со</th>
                    <th class="py-3 px-6 text-left">Превземи</th>

                </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
                @foreach($policies as $policy)
                {{-- @dd($policies) --}}
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left">{{ $policy->policy_type }}</td>
                        <td class="py-3 px-6 text-left">{{ $policy->policy_number }}</td>
                        {{-- <td class="py-3 px-6 text-left">{{ $policy->user_id->user->name }}</td> --}}
                        <td class="py-3 px-6 text-left">{{ $policy->start_date }}</td>
                        <td class="py-3 px-6 text-left">{{ $policy->end_date }}</td>
                        <td class="py-3 px-6 text-left">{{ $policy->price }}</td>
                        <td class="py-3 px-6 text-left">{{ $policy->payed_with }}</td>
                        {{-- <td> <a href="{{ route('users.edit', $user->id) }}" class="text-blue-500 hover:underline">Edit</a>
                            <form action="{{ route('users.destroy', $user->id) }}" method="POST" style="display:inline-block;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-red-500 hover:underline">Delete</button>
                            </form>
                        </td> --}}
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
