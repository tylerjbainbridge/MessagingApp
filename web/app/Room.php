<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model {

    protected $fillable = [
        'name',
        'ref',
        'title',
        'description',
        'user_id'
    ];

    public function topics() {
        return $this->hasMany(Topic::class, 'name', 'room_name');
        // return $this->hasMany(Topic::class);
    }

    public function user() {
        return $this->belongsTo(User::class)->select(array('id', 'username'));
    }
}
