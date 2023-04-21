<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facadest\DB;
use App\Models\Student;
use Validator;
use App\Models\Program;
use App\Http\Controllers\ResponseController;

class studentController extends ResponseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$Student = Student::find(1);
        //$Student = Student::where('name','pablo')->get();
        $Student = Student::all();
        return $Student;
       //return $this->sendResponse($Student, 'Student index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|min:3',
            'lastname' => 'required|min:5',
            'control' => 'required|min:8',
            'email' => 'required|email|unique:students',
            'birthday' => 'required'
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $program = Program::find($request->program_id);
        if(is_null ($program)){
            return 'Program id not found';
        }

        $student = new Student;

        $student->name = $request->name;
        $student->lastname = $request->lastname;
        $student->control = $request->control;
        $student->email = $request->email;
        $student->birthday = $request->birthday;
        $student->save();
        return Student::all();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //si quiero buscar por id, agragar a los params esto -> ,$id
        //$student= Student::where($id); //buscar por id
        //buscar por control
        $student = Student::where('control', $request->control)->first();
        $student->name=$request->name;
        $student->last_name =$request->last_name;
        $student->control =$request->control;
        $student->email =$request->email;
        $student->birthday =$request->birthday;
        $student->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $student = Student::where('control',$request -> control);
        $student -> delete();
        return Student::all();
    }

    public function get_token()
    {
        return csrf_token();
    }
}