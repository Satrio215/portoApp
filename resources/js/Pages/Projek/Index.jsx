import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, projeks }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Daftar Projek</h2>}
        >
            <Head title="Daftar Projek" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 bg-gray-100 border-b border-gray-200">
                            {/* <div className="mb-4 flex justify-end">
                                <Link href={route('projeks.create')} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition ease-in-out duration-300">
                                    Tambah Projek
                                </Link>
                            </div> */}

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keterangan</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teknologi</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gambar</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {projeks.map((projek) => (
                                            <tr key={projek.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{projek.judul}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{projek.keterangan}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{projek.tech}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <img src={projek.gambar} alt={projek.judul} className="w-20 h-20 object-cover rounded-lg" />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <a href={projek.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900">
                                                        {projek.link}
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    {/* <Link href={route('projeks.edit', projek.id)} className="text-indigo-600 hover:text-indigo-900">
                                                        Edit
                                                    </Link> */}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
