<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Policy;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class PolicyController extends Controller
{
    public function index()
    {
        // $policies = Policy::all();
        // return response()->json($policies);

        $user = User::query()->with('policies')->inRandomOrder()->first();
        return response()->json($user->policies);
    }

    public function show(Policy $id)
    {
        $user = Auth::user();

        if ($id && $id->user_id === $user->id) {
            return response()->json($id);
        } else {
            return response()->json(['message' => 'Policy not found or unauthorized'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $policy = Policy::find($id);

        if ($policy) {
            $validatedData = $request->validate([
                'name' => 'string|max:255',
                'description' => 'string',
                // Add other validation rules as necessary
            ]);

            $policy->update($validatedData);
            return response()->json($policy);
        } else {
            return response()->json(['message' => 'Policy not found'], 404);
        }
    }

    public function destroy($id)
    {
        $policy = Policy::find($id);
        if ($policy) {
            $policy->delete();
            return response()->json(['message' => 'Policy deleted successfully']);
        } else {
            return response()->json(['message' => 'Policy not found'], 404);
        }
    }
}
