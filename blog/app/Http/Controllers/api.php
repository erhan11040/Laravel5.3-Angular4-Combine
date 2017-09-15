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
            //$path = $request->file('file')->storeAs('avatars', "resim.jpg");
            Storage::disk('uploads')->putFileAs('userName', $request->file('file') , "resim.jpg");
            return response()->json(array("path"=>"http://localhost/angular4Laravel/blog/public/img/uploads/userName/resim.jpg"));
            //Storage::delete('file.jpg');
            //$exists = Storage::disk('s3')->exists('file.jpg');
            //$contents = Storage::get('file.jpg');
    		//add to db
    		//return success or fail
		}
		else
			echo "there is no file";
      //echo "<img src=http://localhost/angular4Laravel/blog/public/storage/app/avatars/resim.jpg />";
      echo "<img src=".asset("storage/app/avatars/resim.jpg")." />" ;
    	//return view("api",array("file" => $file));
    }
}
