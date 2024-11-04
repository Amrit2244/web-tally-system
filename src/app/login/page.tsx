"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await axios.post("/api/auth/login", {
                username,
                password,
            });

            setMessage("Successfully logged in!");
            // Optionally redirect to home or another page
            router.push("/home");
        } catch (error: any) {
            if (error.response) {
                setMessage(error.response.data.error || "Login failed.");
            } else {
                setMessage("Login failed.");
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold text-center text-purple-700">Welcome Back</h1>
                <h2 className="text-xl text-center text-gray-700">Login to your account</h2>

                {message && <p className={`text-center ${message.includes("Success") ? "text-green-500" : "text-red-500"}`}>{message}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Not registered?{' '}
                    <a href="/signup" className="text-purple-600 hover:underline">
                        Create an account
                    </a>
                </p>
            </div>
        </div>
    );
}
