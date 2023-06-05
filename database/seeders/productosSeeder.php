<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use Carbon\Carbon;

class ProductosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $p1 = new Product();
        $p1->id = 1;
        $p1->model = "Mercedes A3";
        $p1->description = "El Mercedes Clase A es el compacto por excelencia de la marca alemana. En su cuarta generación nos encontramos con un vehículo con una imagen nueva, moderna y más tecnológica. El Clase A mejora en espacio a bordo y calidad de sus materiales. El diseño del nuevo Clase A es una clara evolución del diseño anterior. Las mismas formas adaptadas con los últimos matices estéticos de la marca, dotando de un gran protagonismo a sus ópticas, que siguen el camino trazado por el nuevo Mercedes CLS.";
        $p1->stock = 10;
        $p1->price = 590000;
        $p1->brand = "Mercedes";
        $p1->category = "Automovil";
        $p1->year = 2022;
        $p1->image = "https://drive.google.com/uc?id=1gwt6da6CtaczVQRUVhnDb_DEkRC4zHN6";
        $p1->save();

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


        $p7 = new Product();
        $p7->id = 7;
        $p7->model = "Fortuner";
        $p7->description = "Fortuner integra avanzados dispositivos que optimizan tu seguridad y la de tus acompañantes ante diversas condiciones de manejo.";
        $p7->stock = 10;
        $p7->price = 600000;
        $p7->brand = "Toyota";
        $p7->category = "Camioneta";
        $p7->year = 2022;
        $p7->image = "https://drive.google.com/uc?id=1BjPHUXoLS0wXOjZhrYYNpf7Ud8AtJoxo";
        $p7->save();

        $p8 = new Product();
        $p8->id = 8;
        $p8->model = "Hillux";
        $p8->description = "Hillux integra avanzados dispositivos que optimizan tu seguridad y la de tus acompañantes ante diversas condiciones de manejo.";
        $p8->stock = 5;
        $p8->price = 500000;
        $p8->brand = "Toyota";
        $p8->category = "Camioneta";
        $p8->year = 2022;
        $p8->image = "https://drive.google.com/uc?id=1sx9ivkH6Kh0ORXTy-8bn0_7p8a-1zkNM";
        $p8->save();

        $p9 = new Product();
        $p9->id = 9;
        $p9->model = "Jetta";
        $p9->description = "Nuevo Jetta es el acompañante perfecto para llenar tu vida de momentos emocionantes, hazlos aún más increíbles con la potencia que ofrece el eficiente Motor 1.4 L TSI con 150 Hp y 250 Nm.";
        $p9->stock = 10;
        $p9->price = 290000;
        $p9->brand = "Volkswagen";
        $p9->category = "Automovil";
        $p9->year = 2022;
        $p9->image = "https://drive.google.com/uc?id=1K_kpS16wn6ix4UG3DMnVC-5F4-xTHySu";
        $p9->save();

        $p10 = new Product();
        $p10->id = 10;
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