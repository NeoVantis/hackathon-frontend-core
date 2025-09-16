import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { getProfile } from '../api/auth'
import type { User } from '../types/auth'

export default function Home() {
  const { logout } = useAuth()
  const [profile, setProfile] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile()
        setProfile(data)
      } catch (err) {
        console.error('Failed to fetch profile:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [])

  if (loading) {
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
        {profile ? (
          <div className="space-y-4">
            <p className="text-[#C7C7CC]">Hello, {profile.username}!</p>
            <p className="text-[#C7C7CC]">Email: {profile.email}</p>
            {profile.fullName && <p className="text-[#C7C7CC]">Full Name: {profile.fullName}</p>}
            {profile.college && <p className="text-[#C7C7CC]">College: {profile.college}</p>}
          </div>
        ) : (
          <p className="text-[#C7C7CC]">Failed to load profile.</p>
        )}
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
