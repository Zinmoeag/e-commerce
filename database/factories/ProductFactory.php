<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'productCode' => fake()->numberBetween(1000, 1000000),
            'category_id' => fake()->numberBetween(1,5),
            'brand_id' => fake()->numberBetween(1,5),
            'description' => fake()->paragraph(),
            'stock_qty' => fake()->numberBetween(1,100),
            'price' => fake()->numberBetween(1,100)
        ];
    }
}
