<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class InvoiceController extends Controller
{
    public function index()
    {
        $invoices = Invoice::all();

        return response()->json($invoices);
    }

    public function show(Invoice $id)
    {
        $user = Auth::user();

        if ($id && $id->user_id === $user->id) {
            return response()->json($id);
        } else {
            return response()->json(['message' => 'Invoice record not found or unauthorized'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $invoice = Invoice::find($id);

        if ($invoice) {
            $validatedData = $request->validate([
                'amount' => 'numeric',
                'due_date' => 'date',
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
