// import { addUser } from "@/actions/server/userActions"; // File path check kore nio
import { addUser } from "@/actions/server/userActions";
import { prisma } from "@/lib/prisma";

export default async function LoginPage() {
    // Login page load hoyar somoy database theke user-der niye ashbe
    const users = await prisma.user.findMany();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Login & DB Test
                </h1>

                {/* User Add Form */}
                <form action={addUser} className="mb-8">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Create New Test User
                    </button>
                </form>

                {/* Database Stats */}
                <div className="border-t pt-6">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700">
                        Registered Users ({users.length})
                    </h2>
                    <div className="max-h-60 overflow-y-auto bg-gray-50 rounded p-4">
                        {
                            users.length === 0 ? (
                                <p className="text-gray-500 text-sm">No users found in MySQL.</p>
                            ) : (
                                <ul className="space-y-2">
                                    {users.map((user) => (
                                        <li key={user.id} className="text-sm border-b pb-2 text-gray-600">
                                            <span className="font-medium">{user.name}</span>
                                            <br />
                                            <span className="text-xs text-gray-400">{user.email}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}