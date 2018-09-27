<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Atc4 extends Model
{
    /**
     * @var string
     */
    public $table = 'atc4s';
    
    /**
     * @var array
     */
    public $fillable = ['name'];

    
    /**
     * @var array
     */
    public $visible = [
        'id',
        'name'
    ];
}
