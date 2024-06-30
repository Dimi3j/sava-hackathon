<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Damage extends Model
{
    use HasFactory;

    protected $fillable = [
        'policy_id',
        'status',
        'description',
        'amount',
        'date_occurred',
    ];

    public function policy()
    {
        return $this->belongsTo(Policy::class);
    }

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
