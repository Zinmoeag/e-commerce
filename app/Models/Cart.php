<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function products(){
        $this->belongsToMany(Product::class,'cart_product')->withPivot('quantity');
    }

    public function user(){
        $this->hasMany(User::class);
    }
}
