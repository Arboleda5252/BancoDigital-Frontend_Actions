import React, { useState } from 'react';
import { ArrowUpRight, CreditCard, Eye, EyeOff, Home, LogOut, Receipt, Settings, TrendingUp, User, Wallet } from 'lucide-react';

const Dashboard: React.FC = (): React.ReactElement => {
    const [showBalance, setShowBalance] = useState(false);

    const handleConsultarSaldo = () => {
        setShowBalance(true);
    };

    return (
        <div className="w-screen h-screen flex bg-slate-50">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
                {/* Logo */}
                <div className="p-6 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                            <Wallet className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-slate-900 text-xl">BancoDigital</span>
                    </div>
                </div>

                {/* Navegación */}
                <nav className="flex-1 p-4">
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-xl mb-2">
                        <Home className="w-5 h-5" />
                        <span>Inicio</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl mb-2 transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                        <span>Transferencias</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl mb-2 transition-colors">
                        <Receipt className="w-5 h-5" />
                        <span>Movimientos</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl mb-2 transition-colors">
                        <TrendingUp className="w-5 h-5" />
                        <span>Inversiones</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                        <Settings className="w-5 h-5" />
                        <span>Configuración</span>
                    </button>
                </nav>

                {/* Usuario */}
                <div className="p-4 border-t border-slate-200">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-slate-900 text-sm">Sayury</p>
                            <p className="text-slate-500 text-xs">sayury@email.com</p>
                        </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors text-sm">
                        <LogOut className="w-4 h-4" />
                        Cerrar sesión
                    </button>
                </div>
            </div>

            {/* Contenido Principal */}
            <div className="flex-1 overflow-auto">
                {/* Header */}
                <div className="bg-white border-b border-slate-200 px-8 py-6">
                    <h1 className="text-slate-900 text-3xl">¡Bienvenido, Sayury!</h1>
                    <p className="text-slate-500 mt-1">Aquí está el resumen de tus cuentas</p>
                </div>

                {/* Dashboard Content */}
                <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        {/* Tarjeta Principal de Saldo */}
                        <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl">
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <p className="text-blue-100 mb-2">Cuenta Corriente</p>
                                    <p className="text-white/80">**** **** 4892</p>
                                </div>
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <CreditCard className="w-6 h-6" />
                                </div>
                            </div>

                            <div>
                                <p className="text-blue-100 mb-3">Saldo disponible</p>
                                {showBalance ? (
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-5xl">$12,547.89</h2>
                                        <button
                                            onClick={() => setShowBalance(false)}
                                            className="text-white/80 hover:text-white transition-colors"
                                        >
                                            <EyeOff className="w-6 h-6" />
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={handleConsultarSaldo}
                                        className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
                                    >
                                        <Eye className="w-5 h-5" />
                                        Consultar mi saldo
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Tarjeta de Ahorro */}
                        <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <p className="text-slate-500 text-sm mb-1">Cuenta de Ahorro</p>
                                    <p className="text-slate-400 text-sm">**** 3421</p>
                                </div>
                                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-green-600" />
                                </div>
                            </div>
                            <h3 className="text-slate-900 text-2xl">$5,230.00</h3>
                        </div>
                    </div>

                    {/* Acciones Rápidas */}
                    <div>
                        <h3 className="text-slate-900 text-xl mb-4">Acciones rápidas</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <button className="bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 flex items-center gap-4 transition-colors shadow-sm">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                                    <ArrowUpRight className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="text-left">
                                    <p className="text-slate-900">Transferir dinero</p>
                                    <p className="text-slate-500 text-sm">Enviar a otra cuenta</p>
                                </div>
                            </button>

                            <button className="bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 flex items-center gap-4 transition-colors shadow-sm">
                                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                                    <Receipt className="w-6 h-6 text-purple-600" />
                                </div>
                                <div className="text-left">
                                    <p className="text-slate-900">Ver movimientos</p>
                                    <p className="text-slate-500 text-sm">Historial completo</p>
                                </div>
                            </button>

                            <button className="bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 flex items-center gap-4 transition-colors shadow-sm">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                                    <CreditCard className="w-6 h-6 text-green-600" />
                                </div>
                                <div className="text-left">
                                    <p className="text-slate-900">Pagar servicios</p>
                                    <p className="text-slate-500 text-sm">Luz, agua, internet</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
