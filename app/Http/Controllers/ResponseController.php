<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResponseController extends Controller
{
    public function sendResponse($result, $message){
        $response = [
            'success' => true,
            'data' => $result,
            'message' => $message,
            'email' => $result['email'],
            'id' => $result['id'],
            'token' => $result['token'],
        ];
        return response()->json($response, 200);
    }

    public function sendError($error, $errorMessage = [], $code = 401){
        $response = [
            #'success' => false,
            'fail' => 'Fail while triying to login',
            'message' => $error,
        ];

        if(!empty($errorMessage)){
            $response['data'] = $errorMessage;
        }

        return response()->json($response, 401);
    }
}
