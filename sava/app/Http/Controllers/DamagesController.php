<?php

namespace App\Http\Controllers;

use App\Models\Damage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class DamagesController extends Controller
{
    public function index()
    {
        $damages = Damage::all();

        return response()->json($damages);
    }

    public function show(Damage $id)
    {
        $user = Auth::user();

        if ($id && $id->user_id === $user->id) {
            return response()->json($id);
        } else {
            return response()->json(['message' => 'Damage record not found or unauthorized'], 404);
        }
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
