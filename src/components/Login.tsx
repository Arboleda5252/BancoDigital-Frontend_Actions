import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, Wallet } from  'lucide-react';

export interface LoginProps {
    onLogin: () => void
}

const Login: React.FC<LoginProps> = ({ onLogin }): React.ReactElement => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulación de login
        if (email && password) {
            onLogin();
        }
    };

    return (
        <div className="w-screen h-screen flex">
            {/* Panel Izquierdo - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-12 flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                            <Wallet className="w-7 h-7 text-blue-600" />
                        </div>
                        <span className="text-white text-2xl">BancoDigital</span>
                    </div>
                    <h1 className="text-white text-5xl mb-6">Tu banco,<br />más cerca que nunca</h1>
                    <p className="text-blue-100 text-xl">Gestiona tus finanzas de forma segura y sencilla</p>
                </div>
                <div className="text-blue-200 text-sm">
                    © 2026 BancoDigital. Todos los derechos reservados.
                </div>
            </div>

            {/* Panel Derecho - Formulario */}
            <div className="flex-1 flex items-center justify-center bg-white p-8">
                <div className="w-full max-w-md">
                    <div className="mb-10">
                        <h2 className="text-slate-900 text-4xl mb-3">¡Bienvenido!</h2>
                        <p className="text-slate-500 text-lg">Ingresa a tu cuenta para continuar</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Campo Email */}
                        <div>
                            <label className="text-slate-700 mb-2 block">Correo electrónico</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="tu@email.com"
                                    className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Campo Contraseña */}
                        <div>
                            <label className="text-slate-700 mb-2 block">Contraseña</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm text-slate-600">
                                <input type="checkbox" className="rounded border-slate-300" />
                                Recordarme
                            </label>
                            <button type="button" className="text-blue-600 text-sm hover:text-blue-700">
                                ¿Olvidaste tu contraseña?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 transition-colors shadow-lg text-lg"
                        >
                            Iniciar sesión
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500">
                            ¿No tienes cuenta?{' '}
                            <button className="text-blue-600 hover:text-blue-700">Regístrate aquí</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
