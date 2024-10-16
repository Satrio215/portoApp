<?php

namespace App\Http\Controllers;

use App\Models\Projek;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjekController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projeks = Projek::latest()->get()->map(function ($projek) {
            $projek->gambar = Storage::url($projek->gambar);
            return $projek;
        });

        return inertia('Projek/Index', [
            'projeks' => $projeks,
        ]); 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Projek/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $request->validate([
        'gambar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        'judul' => 'required|string|max:255',
        'keterangan' => 'required|string',
        'tech' => 'required|string|max:255',
        'link' => 'required|url|max:255',
        'user_id' => 'required|exists:users,id',
    ]);

    $path = $request->file('gambar')->store('images', 'public');

    Projek::create([
        'gambar' => $path,
        'judul' => $request->judul,
        'keterangan' => $request->keterangan,
        'tech' => $request->tech,
        'link' => $request->link,
        'user_id' => $request->user_id,
    ]);

    return redirect()->route('projeks.index')->with('success', 'Projek berhasil dibuat.');
}


    /**
     * Display the specified resource.
     */
    public function show(Projek $projek)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $projek = Projek::findOrFail($id);
        return inertia('Projek/Update', [
        'projek' => $projek,
    ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
{
    $projek = Projek::findOrFail($id);

    $request->validate([
        'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        'judul' => 'required|string|max:255',
        'keterangan' => 'required|string',
        'tech' => 'required|string|max:255',
        'link' => 'required|url|max:255',
        'user_id' => 'required|exists:users,id',
    ]);

    if ($request->hasFile('gambar')) {
        if ($projek->gambar && Storage::exists('public/' . $projek->gambar)) {
            Storage::delete('public/' . $projek->gambar);
        }
        $path = $request->file('gambar')->store('images', 'public');
        $projek->gambar = $path;
    }

    $projek->judul = $request->judul;
    $projek->keterangan = $request->keterangan;
    $projek->tech = $request->tech;
    $projek->link = $request->link;
    $projek->user_id = $request->user_id;

    $projek->save();

    return redirect()->route('projeks.index')->with('success', 'Projek berhasil diperbarui.');
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $projek = Projek::findOrFail($id);

        if ($projek->gambar && Storage::exists('public/' . $projek->gambar)) {
            Storage::delete('public/' . $projek->gambar);
        }

        $projek->delete();

        return response()->json(['message' => 'Projek berhasil dihapus.']);
    }
}
