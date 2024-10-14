<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests\UpdatePengalamanRequest;
use App\Models\Pengalaman;

class PengalamanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pengalamans = Pengalaman::latest()->get();

        return inertia('Pengalaman/Index', [
            'pengalamans' => $pengalamans
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Pengalaman/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'judul' => 'required',
            'mulai' => 'required',
            'selesai' => 'required',
            'keterangan' => 'required'
        ]);

        Pengalaman::create([
            'judul' => $request->input('judul'),
            'mulai' => $request->input('mulai'),
            'selesai' => $request->input('selesai'),
            'keterangan' => $request->input('keterangan'),
            'user_id' => auth()->user()->id,
        ]);
    
        return redirect()->route('pengalamans.index')->with('success', 'Pengalaman berhasil ditambahkan.');
    
    }

    /**
     * Display the specified resource.
     */
    public function show(Pengalaman $pengalaman)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $pengalaman = Pengalaman::findOrFail($id);

        return inertia('Pengalaman/Update', [
            'pengalaman' => $pengalaman,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pengalaman $pengalaman, $id)
    {

        $pengalaman = Pengalaman::findOrFail($id);

        $request->validate([
            'judul' => 'required',
            'mulai' => 'required',
            'selesai' => 'required',
            'keterangan' => 'required'
        ]);

        $pengalaman->update([
            'judul' => $request->input('judul'),
            'mulai' => $request->input('mulai'),
            'selesai' => $request->input('selesai'),
            'keterangan' => $request->input('keterangan'),
            'user_id' => auth()->user()->id,
        ]);

        return redirect()->route('pengalamans.index')->with('success', 'Pengalaman berhasil diupdate.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pengalaman $pengalaman, $id)
    {
        $pengalaman = Pengalaman::findOrFail($id);
        $pengalaman->delete();

        return response()->json(['message' => 'Pengalaman berhasil dihapus.']);

    }
}
