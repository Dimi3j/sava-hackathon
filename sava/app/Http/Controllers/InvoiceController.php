<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index()
    {
        $invoices = Invoice::all();

        return response()->json($invoices);
    }

    public function show($id)
    {
        $invoices = Invoice::find($id);
        if ($invoices) {
            return response()->json($invoices);
        } else {
            return response()->json(['message' => 'Invoice record not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'amount' => 'required|numeric',
            'due_date' => 'required|date',
            // Add other validation rules as necessary
        ]);

        $invoice = Invoice::create($validatedData);
        return response()->json($invoice, 201);
    }
    
    public function update(Request $request, $id)
    {
        $invoice = Invoice::find($id);

        if ($invoice) {
            $validatedData = $request->validate([
                'amount' => 'numeric',
                'due_date' => 'date',
                // Add other validation rules as necessary
            ]);

            $invoice->update($validatedData);
            return response()->json($invoice);
        } else {
            return response()->json(['message' => 'Invoice not found'], 404);
        }
    }

    public function destroy($id)
    {
        $invoice = Invoice::find($id);
        if ($invoice) {
            $invoice->delete();
            return response()->json(['message' => 'Invoice deleted successfully']);
        } else {
            return response()->json(['message' => 'Invoice not found'], 404);
        }
    }
}
