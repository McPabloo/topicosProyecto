<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_histories', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("user_id");
            $table->integer("total");
            $table->unsignedBigInteger("discount_id");
            $table->unsignedBigInteger("sCart_id");
            $table->date("sDate");
            $table->foreign('discount_id')->references('id')->on('discounts');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('sCart_id')->references('id')->on('shopping_carts');
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
        Schema::dropIfExists('sales_histories');
    }
};
