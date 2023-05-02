<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class productosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $p2 = new Product();
        $p2->id = 2;
        $p2->model = "Corolla";
        $p2->description = "El Toyota Corolla se caracteriza por ser un coche que ha acercado la tecnología híbrida al común de los conductores con un buen diseño, calidad interior, eficiencia, bajos consumos y un precio razonable. Es uno de los autos insignia de la marca y uno de los referentes en el segmento de los compactos, con una gran popularidad en todo el mundo que viene gracias a la durabilidad, desempeño y calidad.";
        $p2->stock = 10;
        $p2->price = 390000;
        $p2->brand = "Toyota";
        $p2->category = "Automovil";
        $p2->year = 2022;
        $p2->image = "https://drive.google.com/uc?id=1KfSc7n_mUfrvlMPjkyx763j3-psEwn3r";
        $p2->save();

        $p3 = new Product();
        $p3->id = 3;
        $p3->model = "Audi A3";
        $p3->description = "El Audi A3 es un automóvil del segmento C producido por el fabricante alemán Audi. El diseño del Audi A3 Sportback es deportivo y agresivo en todas sus vistas. Basado en la plataforma modular MQB, ya empleada por el A3 de tercera generación, el A3 Sportback evoluciona su receta con mínimos cambios en tanto a sus medidas. ";
        $p3->stock = 19;
        $p3->price = 470000;
        $p3->brand = "Audi";
        $p3->category = "Automovil";
        $p3->year = 2022;
        $p3->image = "https://drive.google.com/uc?id=1E2sr507853zFk71mGCC4Pk9sTm7aMI2l";
        $p3->save();


        $p4 = new Product();
        $p4->id = 4;
        $p4->model = "Camaro";
        $p4->description = "Chevrolet Camaro es un icono de deportividad, aerodinámico y alto desempeño, creado para los amantes del performance y la velocidad. El selector de modos de manejo te permite elegir entre modo deportivo, turismo, nieve/hielo y pista, y así personalizar tu experiencia de conducción.";
        $p4->stock = 9;
        $p4->price = 590000;
        $p4->brand = "Ford";
        $p4->category = "Automovil";
        $p4->year = 2022;
        $p4->image = "https://drive.google.com/uc?id=1KH-UffDWyI5gB_3Y_t-o7FZ9R8BbdQNA";
        $p4->save();

        $p10 = new Product();
        $p10->id = 5;
        $p10->model = "Tiguan";
        $p10->description = "Te presentamos Nuevo Tiguan, el SUVW que reúne todo lo que tú y tu familia necesitan en seguridad, tecnología y entretenimiento para todos los trayectos juntos.";
        $p10->stock = 10;
        $p10->price = 580000;
        $p10->brand = "Volkswagen";
        $p10->category = "Camioneta";
        $p10->year = 2021;
        $p10->image = "https://drive.google.com/uc?id=1cxMxvyPthFup3QRRygTAcoQf0wZ1TUfi";
        $p10->save();
    }
}
