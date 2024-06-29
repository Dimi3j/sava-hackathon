<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'policy_id',
        'amount',
        'issue_date',
    ];

    public function policy()
    {
        return $this->belongsTo(Policy::class);
    }
}
