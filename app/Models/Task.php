<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    // protected $fillable = [
    //     'name',
    //     'description',
    //     'due_date',
    //     'status',
    //     'priority',
    //     'image_path',
    //     'project_id',
    //     'assigned_to',
    //     'created_by',
    //     'updated_by',
    // ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
    
    public function assignedTo()
    {
        return $this->belongsTo(User::class, 'assigned_user_id');
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
