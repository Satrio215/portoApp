import React from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        gambar: null,
        judul: '',
        keterangan: '',
        tech: '',
        link: '',
        user_id: auth.user.id, // Ambil user_id dari auth
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data); // Debug data yang akan dikirim
        post(route('projeks.store'), {
            onSuccess: () => reset({
                judul: '',
                keterangan: '',
                tech: '',
                link: '',
                gambar: null,
                user_id: auth.user.id
            }), // Reset form, tetap simpan user_id
        });
    };

    const handleFileChange = (e) => {
        setData('gambar', e.target.files[0]);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tambah Projek" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 bg-gray-100 border-b border-gray-200">
                            <h2 className="font-semibold text-xl text-gray-800 leading-tight mb-4">Tambah Projek</h2>

                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Gambar</label>
                                    <input 
                                        type="file" 
                                        onChange={handleFileChange} 
                                        className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer" 
                                    />
                                    {errors.gambar && <span className="text-red-600 text-sm">{errors.gambar}</span>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Judul</label>
                                    <input 
                                        type="text" 
                                        value={data.judul} 
                                        onChange={(e) => setData('judul', e.target.value)} 
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                    />
                                    {errors.judul && <span className="text-red-600 text-sm">{errors.judul}</span>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Keterangan</label>
                                    <textarea
                                        value={data.keterangan}
                                        onChange={(e) => setData('keterangan', e.target.value)}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                    ></textarea>
                                    {errors.keterangan && <span className="text-red-600 text-sm">{errors.keterangan}</span>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Teknologi</label>
                                    <input 
                                        type="text" 
                                        value={data.tech} 
                                        onChange={(e) => setData('tech', e.target.value)} 
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                    />
                                    {errors.tech && <span className="text-red-600 text-sm">{errors.tech}</span>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Link Projek</label>
                                    <input 
                                        type="url" 
                                        value={data.link} 
                                        onChange={(e) => setData('link', e.target.value)} 
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                    />
                                    {errors.link && <span className="text-red-600 text-sm">{errors.link}</span>}
                                </div>

                                <div className="flex justify-end">
                                    <Link href={route('projeks.index')} className="bg-gray-600 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-700">
                                        Kembali
                                    </Link>
                                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                        Simpan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
