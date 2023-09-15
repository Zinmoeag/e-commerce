<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $category = new Category();
        $category::create([
            'name' => 'shirt',
            'slug' => 'shirt'
        ]);
        $category = new Category();
        $category::create([
            'name' => 'hat',
            'slug' => 'hat'
        ]);
        $category = new Category();
        $category::create([
            'name' => 'shoes',
            'slug' => 'shoes'
        ]);
        $category = new Category();
        $category::create([
            'name' => 'jersey',
            'slug' => 'jersey'
        ]);
        $category = new Category();
        $category::create([
            'name' => 'jacket',
            'slug' => 'jacket'
        ]);
        $category = new Category();
        $category::create([
            'name' => 'pants',
            'slug' => 'pants'
        ]);
        $category = new Category();
        $category::create([
            'name' => 'socks',
            'slug' => 'socks'
        ]);
        $category = new Category();
        $category::create([
            'name' => 'underware',
            'slug' => 'underware'
        ]);
        $category = new Category();
        $category::create([
            'name' => 'jean-pants',
            'slug' => 'jeanpants'
        ]);
        $category = new Category();
        $category::create([
            'name' => 'toy',
            'slug' => 'toy'
        ]);
        $category = new Category();
        $category::create([
            'name' => 'eye-glass',
            'slug' => 'eyeGlass'
        ]);
        $category = new Category();
        $category::create([
            'name' => 'belt',
            'slug' => 'belt'
        ]);
        $category = new Category();
        $category::create([
            'name' => 'perfume',
            'slug' => 'perfume'
        ]);
        $category = new Category();
        $category::create([
            'name' => 'lipstick',
            'slug' => 'lipstick'
        ]);

    }
}
