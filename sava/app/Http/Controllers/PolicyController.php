<?php

namespace App\Http\Controllers;

use App\Models\Policy;
use Illuminate\Http\Request;

class PolicyController extends Controller
{
    public function index()
    {
        $policies = Policy::all();

        return response()->json($policies);
    }

    public function show($id)
    {
        $policies = Policy::find($id);
        if ($policies) {
            return response()->json($policies);
        } else {
            return response()->json(['message' => 'Policy record not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            // Add other validation rules as necessary
        ]);

        $policy = Policy::create($validatedData);
        return response()->json($policy, 201);
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
