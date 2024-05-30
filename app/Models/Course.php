<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Course extends Model
{
    use HasFactory;

    // protected $fillable = ['title', 'description', 'slug'];

    // public function setSlugAttribute($value)
    // {
    //     $this->attributes['slug'] = Str::slug($value);
    // }

    public function creator(){
        return $this->belongsTo(User::class);

    }
    public function students(){
        return $this->belongsToMany(User::class);
    }

    public function catagory(){
        return $this->belongsTo(Category::class);
    }

    public function requirements(){
        return $this->hasMany(Requirement::class);
    }
    public function sections(){
        return $this->hasMany(Section::class);
    }
    public function rating(){
        return $this->hasMany(Rating::class);
    }
    public function for(){
        return $this->hasMany(CourseFor::class);
    }
}
