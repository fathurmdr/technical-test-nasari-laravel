<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'Budi Nasari',
            'email' => 'budi@nasari.com',
            'password' => bcrypt('budipassword'),
        ]);

        User::create([
            'name' => 'Andi Nasari',
            'email' => 'andi@nasari.com',
            'password' => bcrypt('andipassword'),
        ]);

        User::factory(10)->create();
    }
}
