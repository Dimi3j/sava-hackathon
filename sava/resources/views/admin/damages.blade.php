@extends('layouts.admin')

@section('title', 'Штети')

@section('content')
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Штети</h2>
        <table class="min-w-full bg-white">
            <thead class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                    <th class="py-3 px-6 text-left">ID</th>
                    <th class="py-3 px-6 text-left">Опис</th>
                    <th class="py-3 px-6 text-left">Статус</th>
                    <th class="py-3 px-6 text-left">Дата на пријавување</th>
                </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
                @foreach($damages as $damage)
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left">{{ $damage->id }}</td>
                        <td class="py-3 px-6 text-left">{{ $damage->description }}</td>
                        <td class="py-3 px-6 text-left">{{ $damage->status }}</td>
                        <td class="py-3 px-6 text-left">{{ $damage->date_occurred }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection