<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    // Display a listing of the resource
    public function index()
    {
        $users = User::all();
        return view('admin.profiles', compact('users'));
    }

    public function edit($id) {
        $user=User::find($id);

        return view('admin.edit_user', compact('user'));
    }

    // Show the form for editing the specified resource
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $id,
            'phone' => 'nullable|string|max:20',
        ]);

        $user = User::findOrFail($id);
        $user->update($request->all());

        // return redirect()->route('users.index');
        return view('admin.admin', compact('user'));

    }

    public function usersIndex($id){
        $user=User::find($id);
        return view('admin.admin', compact('user'));
    }

    

    // Remove the specified resource from storage
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return view('admin.admin', compact('user'));

        // return redirect()->route('users.index')->with('success', 'User deleted successfully.');
    }
}
