import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function PengalamanIndex({ pengalamans, auth }) {
    const handleDelete = (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus pengalaman ini?')) {
            axios.delete(route('pengalamans.destroy', id))
                .then(() => {
                    alert('Pengalaman berhasil dihapus');
                    // Optionally, you can reload the page or update the state to remove the deleted item
                    window.location.reload(); // Refresh the page to see the changes
                })
                .catch((error) => {
                    console.error('Error deleting experience:', error);
                });
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Daftar Pengalaman</h2>}
        >
            <Head title="Pengalaman" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 bg-gray-100 border-b border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Daftar Pengalaman</h3>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-300 bg-white rounded-lg shadow table-auto">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Judul</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Mulai</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Selesai</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Keterangan</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {pengalamans.map((pengalaman) => (
                                            <tr key={pengalaman.id} className="hover:bg-gray-50">
                                                <td className="px-4 py-2 whitespace-nowrap text-sm">{pengalaman.judul}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm">{pengalaman.mulai}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm">{pengalaman.selesai}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm">{pengalaman.keterangan}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm flex space-x-2">
                                                    {/* Edit Button */}
                                                    <Link
                                                        href={route('pengalamans.edit', pengalaman.id)}
                                                        className="border border-green-600 text-green-600 px-4 py-2 rounded-lg shadow transition-colors duration-300 ease-in-out hover:bg-green-600 hover:text-white text-sm"
                                                    >
                                                        Edit
                                                    </Link>
                                                    
                                                    {/* Delete Button */}
                                                    <button
                                                        onClick={() => handleDelete(pengalaman.id)}
                                                        className="border border-red-600 text-red-600 px-4 py-2 rounded-lg shadow transition-colors duration-300 ease-in-out hover:bg-red-600 hover:text-white text-sm"
                                                    >
                                                        Delete
                                                    </button>
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
