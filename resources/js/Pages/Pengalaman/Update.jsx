import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Update({ auth, pengalaman }) {
    const { data, setData, put, errors } = useForm({
        judul: pengalaman.judul,
        mulai: pengalaman.mulai,
        selesai: pengalaman.selesai,
        keterangan: pengalaman.keterangan
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('pengalamans.update', pengalaman.id)); // Mengirim data ke server untuk diupdate
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Update Pengalaman</h2>}
        >
            <Head title="Update Pengalaman" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 bg-gray-100 border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Judul</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        value={data.judul}
                                        onChange={(e) => setData('judul', e.target.value)}
                                        required
                                    />
                                    {errors.judul && <div className="text-red-500 text-xs mt-1">{errors.judul}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Mulai</label>
                                    <input
                                        type="date"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        value={data.mulai}
                                        onChange={(e) => setData('mulai', e.target.value)}
                                        required
                                    />
                                    {errors.mulai && <div className="text-red-500 text-xs mt-1">{errors.mulai}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Selesai</label>
                                    <input
                                        type="date"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        value={data.selesai}
                                        onChange={(e) => setData('selesai', e.target.value)}
                                        required
                                    />
                                    {errors.selesai && <div className="text-red-500 text-xs mt-1">{errors.selesai}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Keterangan</label>
                                    <textarea
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        value={data.keterangan}
                                        onChange={(e) => setData('keterangan', e.target.value)}
                                        required
                                    />
                                    {errors.keterangan && <div className="text-red-500 text-xs mt-1">{errors.keterangan}</div>}
                                </div>

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
