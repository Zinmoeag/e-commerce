<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;

    public function products()
    {
        return $this->hasMany(Product::class);
    }


    // ACCESSOR
    protected function getPhotoAttribute($value){
        return $value ? env('APP_URL').$value : null;
    }

}
