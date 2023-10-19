<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function login(Request $request){
        $incomeField = $request->validate([
            'login_name'=>'required',
            'login_password'=>'required'
        ]);

        if(auth()->attempt(['name'=>$incomeField['login_name'], 'password'=>$incomeField['login_password']])){
            $request->session()->regenerate();
        };

        return redirect('/');
    }

    public function logout(){
        auth()->logout();
        return redirect('/');
    }

    public function register(Request $request){
        $incomeField = $request -> validate([
            'name'=>['required', 'min: 3', 'max: 30', Rule::unique('users', 'name')],
            'email'=>['required', 'email', Rule::unique('users','email')],
            'password'=> ['required', 'min: 8', 'max: 200']
        ]);
        $incomeField['password'] = bcrypt($incomeField['password']); 
        $user = User::create($incomeField);
        auth()->login($user);
        
        return redirect("/");
    }

};
