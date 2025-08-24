import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">ไม่พบหน้าที่ต้องการ</h2>
        <p className="text-gray-600 mb-4">ขออภัย เราไม่พบหน้าที่คุณกำลังมองหา</p>
        <Link 
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          กลับหน้าแรก
        </Link>
      </div>
    </div>
  )
}