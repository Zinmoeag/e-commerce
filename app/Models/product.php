<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'category_id',
        'brand_id',
        'image',
        'description',
        'stock_qty',
        'price',
    ];

    public function category()
    {
        return $this->belongsTo('App\Models\Category', 'user_id')->withDefault();
    }
    public function brand()
    {
        return $this->belongsTo('App\Models\Brand', 'brand_id')->withDefault();
    }
}
