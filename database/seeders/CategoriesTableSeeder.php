<?php

namespace Database\Seeders;

use App\Models\category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $category = new category();
        $category::create([
            'name' => 'shirt',
            'slug' => 'shirt'
        ]);
        $category = new category();
        $category::create([
            'name' => 'hat',
            'slug' => 'hat'
        ]);
        $category = new category();
        $category::create([
            'name' => 'shoes',
            'slug' => 'shoes'
        ]);
        $category = new category();
        $category::create([
            'name' => 'jersey',
            'slug' => 'jersey'
        ]);
        $category = new category();
        $category::create([
            'name' => 'jacket',
            'slug' => 'jacket'
        ]);
        $category = new category();
        $category::create([
            'name' => 'pants',
            'slug' => 'pants'
        ]);
        $category = new category();
        $category::create([
            'name' => 'bag',
            'slug' => 'bag'
        ]);
        $category = new category();
        $category::create([
            'name' => 'underware',
            'slug' => 'underware'
        ]);
        $category = new category();
        $category::create([
            'name' => 'jean-pants',
            'slug' => 'jeanpants'
        ]);
        $category = new category();
        $category::create([
            'name' => 'toy',
            'slug' => 'toy'
        ]);
        $category = new category();
        $category::create([
            'name' => 'eye-glass',
            'slug' => 'eyeGlass'
        ]);
        $category = new category();
        $category::create([
            'name' => 'belt',
            'slug' => 'belt'
        ]);
        $category = new category();
        $category::create([
            'name' => 'perfume',
            'slug' => 'perfume'
        ]);
        $category = new category();
        $category::create([
            'name' => 'lipstick',
            'slug' => 'lipstick'
        ]);

    }
}
