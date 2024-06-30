@extends('layouts.admin')

@section('title', 'Фактури')

@section('content')
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Фактури</h2>
        <table class="min-w-full bg-white">
            <thead class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                    <th class="py-3 px-6 text-left">ID</th>
                    <th class="py-3 px-6 text-left">Износ</th>
                    <th class="py-3 px-6 text-left">Датум на издавање</th>
                    <th class="py-3 px-6 text-left">Статус</th>
                </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
                @foreach($invoices as $invoice)
                {{-- @dd($invoice->issue_date) --}}
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left">{{ $invoice->id }}</td>
                        {{-- <td class="py-3 px-6 text-left">{{ $invoice->user->name }}</td> --}}
                        <td class="py-3 px-6 text-left">{{ $invoice->amount }}</td>
                        <td class="py-3 px-6 text-left">{{ $invoice->issue_date }}</td>
                        <td class="py-3 px-6 text-left">{{ $invoice->status }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
