export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">ไม่พบหน้าที่ต้องการ</h2>
        <p className="text-gray-600 mb-6">ขออภัย เราไม่พบหน้าที่คุณกำลังมองหา</p>
        <a 
          href="/"
          className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
        >
          กลับหน้าแรก
        </a>
      </div>
    </div>
  )
}