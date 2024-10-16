import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Update({ auth, projek }) {
    const { data, setData, put, errors, reset } = useForm({
        gambar: null,
        judul: projek.judul || '',
        keterangan: projek.keterangan || '',
        tech: projek.tech || '',
        link: projek.link || '',
        user_id: projek.user_id,
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [customErrors, setCustomErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validasi khusus: jika gambar diunggah, judul harus terisi
        let validationErrors = {};
        if (data.gambar && !data.judul) {
            validationErrors.judul = 'Judul wajib diisi ketika gambar diunggah';
        }

        if (Object.keys(validationErrors).length > 0) {
            setCustomErrors(validationErrors); // Menyimpan error ke customErrors
            return;
        }

        // Jika validasi lolos, submit data
        put(route('projeks.update', projek.id), {
            onSuccess: () => reset(),
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData('gambar', file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Update Projek</h2>}
        >
            <Head title="Update Projek" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 bg-gray-100 border-b border-gray-200">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                {/* Input untuk gambar */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Gambar</label>
                                    <input
                                        type="file"
                                        className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer"
                                        onChange={handleFileChange}
                                    />
                                    {errors.gambar && <div className="text-red-500 text-xs mt-1">{errors.gambar}</div>}
                                    {imagePreview && <img src={imagePreview} alt="Image preview" className="mt-4 h-32 w-32 object-cover" />}
                                </div>

                                {/* Input untuk judul */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Judul</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        value={data.judul}
                                        onChange={(e) => setData('judul', e.target.value)}
                                    />
                                    {(errors.judul || customErrors.judul) && (
                                        <div className="text-red-500 text-xs mt-1">{errors.judul || customErrors.judul}</div>
                                    )}
                                </div>

                                {/* Input untuk keterangan */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Keterangan</label>
                                    <textarea
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        value={data.keterangan}
                                        onChange={(e) => setData('keterangan', e.target.value)}
                                    />
                                    {errors.keterangan && <div className="text-red-500 text-xs mt-1">{errors.keterangan}</div>}
                                </div>

                                {/* Input untuk teknologi */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Teknologi</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        value={data.tech}
                                        onChange={(e) => setData('tech', e.target.value)}
                                    />
                                    {errors.tech && <div className="text-red-500 text-xs mt-1">{errors.tech}</div>}
                                </div>

                                {/* Input untuk link projek */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Link Projek</label>
                                    <input
                                        type="url"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        value={data.link}
                                        onChange={(e) => setData('link', e.target.value)}
                                    />
                                    {errors.link && <div className="text-red-500 text-xs mt-1">{errors.link}</div>}
                                </div>

                                {/* Tombol simpan */}
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition ease-in-out duration-300"
                                >
                                    Simpan
                                </button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
