<?php

namespace App\Http\Controllers;

use App\Models\Damage;
use Illuminate\Http\Request;

class DamagesController extends Controller
{
    public function index()
    {
        $damages = Damage::all();

        return response()->json($damages);
    }

    public function show($id)
    {
        $damage = Damage::find($id);
        if ($damage) {
            return response()->json($damage);
        } else {
            return response()->json(['message' => 'Damage record not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'description' => 'required|string',
            'cost' => 'required|numeric',
            // Add other validation rules as necessary
        ]);

        $damage = Damage::create($validatedData);
        return response()->json($damage, 201);
    }

    public function update(Request $request, $id)
    {
        $damage = Damage::find($id);

        if ($damage) {
            $validatedData = $request->validate([
                'description' => 'string',
                'cost' => 'numeric',
                // Add other validation rules as necessary
            ]);

            $damage->update($validatedData);
            return response()->json($damage);
        } else {
            return response()->json(['message' => 'Damage record not found'], 404);
        }
    }

    public function destroy($id)
    {
        $damage = Damage::find($id);
        if ($damage) {
            $damage->delete();
            return response()->json(['message' => 'Damage record deleted successfully']);
        } else {
            return response()->json(['message' => 'Damage record not found'], 404);
        }
    }
}
