=<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShoppingCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shopping_carts', function (Blueprint $table) {
            $table->id();
<<<<<<< HEAD
            $table->unsignedBigInteger("quantity");
            $table->unsignedBigInteger("product_id");
            $table->unsignedBigInteger("user_id");
            $table->foreign('user_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade')
                  ->onUpdate('cascade');
            $table->foreign('product_id')
                  ->references('id')
                  ->on('products')
                  ->onDelete('cascade')
                  ->onUpdate('cascade');
=======
            $table->integer("quantity");
            $table->unsignedBigInteger("product_id");
            $table->unsignedBigInteger("user_id");
            $table->enum('status', ['true', 'false'])->default('false');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('product_id')->references('id')->on('products');
>>>>>>> a7b60712f2a4d5675d383b8ccd37d07d6c5d98ba
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shopping_carts');
    }
}