<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            BrandsTableSeeder::class,
            ProductsTableSeeder::class,
            CategoriesTableSeeder::class
        ]);
        
        User::factory()->create([
            'name' => 'TestUser',
            'email' => 'user@gmail.com',
            'password' => 'user'
        ]);
        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'is_admin' => true,
            'password' => 12345678,
            'user_type' => 'admin',
        ]);

    }
}
