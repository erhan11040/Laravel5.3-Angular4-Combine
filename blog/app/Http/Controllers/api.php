<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
class api extends Controller
{
    public function index(Request $request)
    {

        //$contents = Storage::get('resim.jpg');

 		if ($request->hasFile('file')) 
 		{
 			$file=$request->file('file');
    		//echo  $file;
            $path = $request->file('file')->storeAs('avatars', "resim.jpg");
            return response()->json(array("asd"=>$file->path()));
            //Storage::delete('file.jpg');
            //$exists = Storage::disk('s3')->exists('file.jpg');
            //$contents = Storage::get('file.jpg');
    		//add to db
    		//return success or fail
		}
		else
			echo "there is no file";
    	//return view("api",array("file" => $file));
    }	
}
