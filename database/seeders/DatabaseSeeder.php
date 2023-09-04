<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $levis = Brand::factory()->create([
            'name' => 'Levis',
            'slug' => 'levis'
        ]);

        $adidas = Brand::factory()->create([
            'name' => 'adidas',
            'slug' => 'adidas'
        ]);

        $shirt = Category::factory()->create([
            'name' => 'shirt',
            'slug' => 'shirt'
        ]);

        $shoe = Category::factory()->create([
            'name' => 'shoe',
            'slug' => 'shoe'
        ]);

        Product::factory(2)->create([
            'category_id' => $shirt->id,
            'brand_id' => $adidas->id
        ]);

        Product::factory(2)->create([
            'category_id' => $shoe->id,
            'brand_id' => $levis->id
        ]);
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
