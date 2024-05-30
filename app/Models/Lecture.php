<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lecture extends Model
{
    use HasFactory;

    protected $casts = ['file' => 'binary'];
    public function section(){
        return $this->belongsTo(Section::class);
    }
}
