<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Damage;
use App\Models\Policy;
use App\Models\Invoice;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function profiles()
    {
        $users = User::all();
        return view('admin.profiles', compact('users'));
    }

    public function policies()
    {
        $policies = Policy::all();
        return view('admin.policies', compact('policies'));
    }

    public function damages()
    {
        $damages = Damage::all();
        return view('admin.damages', compact('damages'));
    }

    public function invoices()
    {
        $invoices = Invoice::all();
        return view('admin.invoices', compact('invoices'));
    }
}
