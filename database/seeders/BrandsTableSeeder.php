<?php

namespace Database\Seeders;

use App\Models\brand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brand = new brand();
        $brand::create([
            'name' => 'Adidas',
            'slug' => 'adidas',
            'photo' => '/public/brands_s/adidas.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Augusta',
            'slug' => 'augusta',
            'photo' => '/public/brands_s/augusta.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Calvin-Klein',
            'slug' => 'calvin-klein',
            'photo' => '/public/brands_s/calvin-klein.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'columbia',
            'slug' => 'columbia',
            'photo' => '/public/brands_s/columbia.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Gucci',
            'slug' => 'gucci',
            'photo' => '/public/brands_s/gucci.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Lego',
            'slug' => 'lego',
            'photo' => '/public/brands_s/lego.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Nike',
            'slug' => 'nike',
            'photo' => '/public/brands_s/nike.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Nivea',
            'slug' => 'nivea',
            'photo' => '/public/brands_s/nivea.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Zara',
            'slug' => 'zara',
            'photo' => '/public/brands_s/zara.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Fila',
            'slug' => 'fila',
            'photo' => '/public/brands_s/fila.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Puma',
            'slug' => 'puma',
            'photo' => '/public/brands_s/puma.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Vans',
            'slug' => 'vans',
            'photo' => '/public/brands_s/vans.svg'
        ]);
    }
}
