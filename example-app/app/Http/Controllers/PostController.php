<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function createPoste(Request $request){
        $incomeFild = $request->validate([
            'title' => ['required', 'string'],
            'content'=>['required','string']
        ]);
        
        $incomeFild['title'] = strip_tags($incomeFild['title']); 
        $incomeFild['content'] = strip_tags($incomeFild['content']);
        $incomeFild['user_id'] = auth()->id();
        Post::create($incomeFild); 

        redirect('/');
    } 
}
