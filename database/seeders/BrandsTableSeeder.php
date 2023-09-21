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
            'photo' => '/brands_svg/adidas.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Augusta',
            'slug' => 'augusta',
            'photo' => '/brands_svg/augusta.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Calvin-Klein',
            'slug' => 'calvin-klein',
            'photo' => '/brands_svg/calvin-klein.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'columbia',
            'slug' => 'columbia',
            'photo' => '/brands_svg/columbia.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Gucci',
            'slug' => 'gucci',
            'photo' => '/brands_svg/gucci.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Lego',
            'slug' => 'lego',
            'photo' => '/brands_svg/lego.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Nike',
            'slug' => 'nike',
            'photo' => '/brands_svg/nike.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Nivea',
            'slug' => 'nivea',
            'photo' => '/brands_svg/nivea.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Zara',
            'slug' => 'zara',
            'photo' => '/brands_svg/zara.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Fila',
            'slug' => 'fila',
            'photo' => '/brands_svg/fila.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Puma',
            'slug' => 'puma',
            'photo' => '/brands_svg/puma.svg'
        ]);
        $brand = new brand();
        $brand::create([
            'name' => 'Vans',
            'slug' => 'vans',
            'photo' => '/brands_svg/vans.svg'
        ]);
    }
}
