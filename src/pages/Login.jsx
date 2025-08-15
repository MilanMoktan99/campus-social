import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const auth = (() => {
    try { return getAuth() } catch { return null }
  })()

  const handleAuth = async (mode) => {
    if (!auth) return
    setLoading(true)
    setError('')
    try {
      if (mode === 'login') {
        await signInWithEmailAndPassword(auth, email, password)
      } else if (mode === 'signup') {
        await createUserWithEmailAndPassword(auth, email, password)
      }
      // onAuthStateChanged in App.jsx will redirect to home
    } catch (e) {
      setError(e.message || 'Authentication error')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = async () => {
    if (!auth) return
    setLoading(true)
    setError('')
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      // Redirect handled globally
    } catch (e) {
      setError(e.message || 'Google sign-in error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 pt-32 pb-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome back</h1>
      <p className="text-gray-600 mb-6">Sign in or create an account to continue</p>

      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        {error && <div className="mb-3 text-sm text-red-600">{error}</div>}
        <label className="block text-sm text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 mb-3 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
        />
        <label className="block text-sm text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-1 mb-4 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
        />
        <div className="flex gap-2">
          <button
            disabled={loading}
            onClick={() => handleAuth('login')}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            {loading ? 'Please wait...' : 'Login'}
          </button>
          <button
            disabled={loading}
            onClick={() => handleAuth('signup')}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg"
          >
            {loading ? 'Please wait...' : 'Sign Up'}
          </button>
        </div>
        <button
          disabled={loading}
          onClick={handleGoogle}
          className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          {loading ? 'Please wait...' : 'Continue with Google'}
        </button>
      </div>
    </div>
  )
}

export default Login