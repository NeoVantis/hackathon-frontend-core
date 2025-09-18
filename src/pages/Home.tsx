import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { logout, user } = useAuth()

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white p-8">
      <div className="w-full max-w-xl space-y-6 text-center">
        <h1 className="text-3xl font-bold">Welcome Home</h1>
        <div className="space-y-4">
          <p className="text-[#C7C7CC]">Hello, {user.username}!</p>
          <p className="text-[#C7C7CC]">Email: {user.email}</p>
          {user.fullName && <p className="text-[#C7C7CC]">Full Name: {user.fullName}</p>}
          {user.phoneNumber && <p className="text-[#C7C7CC]">Phone Number: {user.phoneNumber}</p>}
          {user.college && <p className="text-[#C7C7CC]">College: {user.college}</p>}
          {user.address && <p className="text-[#C7C7CC]">Address: {user.address}</p>}
          {user.isVerified !== undefined && (
            <p className="text-[#C7C7CC]">Verified: {user.isVerified ? 'Yes' : 'No'}</p>
          )}
          {user.emailVerifiedAt && (
            <p className="text-[#C7C7CC]">Email Verified At: {new Date(user.emailVerifiedAt).toLocaleString()}</p>
          )}
          {user.isActive !== undefined && (
            <p className="text-[#C7C7CC]">Active: {user.isActive ? 'Yes' : 'No'}</p>
          )}
          {user.createdAt && (
            <p className="text-[#C7C7CC]">Created At: {new Date(user.createdAt).toLocaleString()}</p>
          )}
          {user.updatedAt && (
            <p className="text-[#C7C7CC]">Updated At: {new Date(user.updatedAt).toLocaleString()}</p>
          )}
        </div>
        <button
          onClick={logout}
          className="w-full py-3 px-4 bg-red-600 text-white rounded-[99px] hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
