<?php

namespace Database\Seeders;

use App\Models\product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Air Force Vol-4',
                'product_code' => 1000,
                'category_id' => 3,
                'brand_id' => 1,
                'description' => 'Air-force vol-4, Brand : Adidas',
                'stock_qty' => '20',
                'price' => 200,
            ],
            [
                'name' => 'Air Force Vol-3',
                'product_code' => 1001,
                'category_id' => 3,
                'brand_id' => 1,
                'description' => 'Air-force vol-3, Brand : Adidas',
                'stock_qty' => '20',
                'price' => 200,
            ],
            [
                'name' => 'Walking Shoe Vol-1',
                'product_code' => 1002,
                'category_id' => 3,
                'brand_id' => 1,
                'description' => 'Walking-shoe Vol-1, Brand : Adidas',
                'stock_qty' => '20',
                'price' => 199,
            ],
            [
                'name' => 'Walking Shoe Vol-2',
                'product_code' => 1003,
                'category_id' => 3,
                'brand_id' => 1,
                'description' => 'Walking-shoe Vol-2, Brand : Adidas',
                'stock_qty' => '20',
                'price' => 180,
            ],
            [
                'name' => 'Adicolor Crew Set',
                'product_code' => 1004,
                'category_id' => 1,
                'brand_id' => 1,
                'description' => 'Adicolor Crew Set, Brand : Adidas',
                'stock_qty' => '20',
                'price' => 185,
            ],
            [
                'name' => 'Saturday Hat',
                'product_code' => 1005,
                'category_id' => 2,
                'brand_id' => 1,
                'description' => 'Saturday Hat, Brand : Adidas',
                'stock_qty' => '20',
                'price' => 90,
            ],
            [
                'name' => 'Squad Dufal Bag',
                'product_code' => 1006,
                'category_id' => 7,
                'brand_id' => 1,
                'description' => 'Squad Dufal Bag, Brand : Adidas',
                'stock_qty' => '20',
                'price' => 120,
            ],
            [
                'name' => 'Nike AirForce',
                'product_code' => 1007,
                'category_id' => 3,
                'brand_id' => 7,
                'description' => 'Nike AirForce, Brand : Nike',
                'stock_qty' => '20',
                'price' => 200,
            ],
            [
                'name' => 'Nike Air Max',
                'product_code' => 1008,
                'category_id' => 3,
                'brand_id' => 7,
                'description' => 'Nike Air Max, Brand : Nike',
                'stock_qty' => '20',
                'price' => 210,
            ],
            [
                'name' => 'Nike InfinityRN 4',
                'product_code' => 1009,
                'category_id' => 3,
                'brand_id' => 7,
                'description' => 'Nike InfinityRN 4, Brand : Nike',
                'stock_qty' => '20',
                'price' => 205,
            ],
            [
                'name' => 'Nike InfinityRN 4',
                'product_code' => 1010,
                'category_id' => 3,
                'brand_id' => 7,
                'description' => 'Nike InfinityRN 4, Brand : Nike',
                'stock_qty' => '20',
                'price' => 205,
            ],
            [
                'name' => "Men's Corda",
                'product_code' => 1011,
                'category_id' => 3,
                'brand_id' => 10,
                'description' => "Men's Corda, Brand : Fila",
                'stock_qty' => '20',
                'price' => 90,
            ],
            [
                'name' => "Woman's Ranger Boot",
                'product_code' => 1012,
                'category_id' => 3,
                'brand_id' => 10,
                'description' => "Woman's Ranger Boot, Brand : Fila",
                'stock_qty' => '20',
                'price' => 100,
            ],

        ];


        product::insert($data);
    }
}
