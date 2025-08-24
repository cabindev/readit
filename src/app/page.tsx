export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center">
            <div className="text-center p-8 max-w-2xl mx-auto">
                {/* Logo */}
                <div className="mb-8">
                    <h1 className="text-6xl font-bold mb-2">
                        <span className="text-orange-600">read</span>
                        <span className="text-gray-800">it</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        ศูนย์รวมหนังสือดิจิทัลคุณภาพสูง
                    </p>
                </div>

                {/* Status Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                    <div className="mb-6">
                        <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
                            🚀 เว็บไซต์กำลังพัฒนา
                        </div>
                        
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            ยินดีต้อนรับสู่ readit
                        </h2>
                        
                        <p className="text-gray-600 leading-relaxed mb-6">
                            เรากำลังพัฒนาระบบให้ดียิ่งขึ้น เพื่อมอบประสบการณ์การอ่านหนังสือดิจิทัล
                            ที่ดีที่สุดให้กับท่าน
                        </p>
                    </div>

                    {/* Features Coming Soon */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                            <span className="text-green-500">✓</span>
                            <span className="text-gray-600">ระบบค้นหาหนังสือ</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-green-500">✓</span>
                            <span className="text-gray-600">เครื่องอ่าน PDF</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-green-500">✓</span>
                            <span className="text-gray-600">จัดหมวดหมู่หนังสือ</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-green-500">✓</span>
                            <span className="text-gray-600">ระบบให้คะแนน</span>
                        </div>
                    </div>

                    <div className="mt-8 text-xs text-gray-500">
                        Version 1.0.0 • Azure Static Web Apps • Supabase Database
                    </div>
                </div>
            </div>
        </div>
    );
}
