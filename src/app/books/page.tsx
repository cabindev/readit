// Mock data for books
const mockBooks = [
  {
    id: '1',
    title: 'การเขียนโปรแกรม JavaScript สำหรับผู้เริ่มต้น',
    author: 'นักเขียนไทย',
    category: 'เทคโนโลยี',
    coverImage: '/api/placeholder/150/200',
    description: 'เรียนรู้การเขียนโปรแกรม JavaScript จากพื้นฐานสู่ขั้นสูง',
    pages: 320,
    views: 1250,
    rating: 4.5,
  },
  {
    id: '2',
    title: 'ประวัติศาสตร์ไทยสมัยใหม่',
    author: 'ผู้เชี่ยวชาญประวัติศาสตร์',
    category: 'ประวัติศาสตร์',
    coverImage: '/api/placeholder/150/200',
    description: 'การเปลี่ยนแปลงของสังคมไทยในศตวรรษที่ 20',
    pages: 450,
    views: 980,
    rating: 4.2,
  },
  {
    id: '3',
    title: 'หลักการการเขียนเรียงความ',
    author: 'ครูภาษาไทย',
    category: 'การศึกษา',
    coverImage: '/api/placeholder/150/200',
    description: 'เทคนิคและวิธีการเขียนเรียงความอย่างมีประสิทธิภาพ',
    pages: 280,
    views: 760,
    rating: 4.0,
  },
  {
    id: '4',
    title: 'การจัดการธุรกิจยุคดิจิทัล',
    author: 'ผู้เชี่ยวชาญธุรกิจ',
    category: 'ธุรกิจ',
    coverImage: '/api/placeholder/150/200',
    description: 'กลยุทธ์การทำธุรกิจในยุคเทคโนโลยี',
    pages: 380,
    views: 2100,
    rating: 4.8,
  },
  {
    id: '5',
    title: 'วรรณกรรมไทยร่วมสมัย',
    author: 'นักวิชาการวรรณกรรม',
    category: 'วรรณกรรม',
    coverImage: '/api/placeholder/150/200',
    description: 'การศึกษาวรรณกรรมไทยในช่วงศตวรรษที่ 21',
    pages: 520,
    views: 840,
    rating: 4.3,
  },
  {
    id: '6',
    title: 'หลักการวิทยาศาสตร์',
    author: 'ศาสตราจารย์วิทยาศาสตร์',
    category: 'วิทยาศาสตร์',
    coverImage: '/api/placeholder/150/200',
    description: 'หลักการพื้นฐานของวิทยาศาสตร์ที่ทุกคนควรรู้',
    pages: 420,
    views: 1560,
    rating: 4.6,
  },
]

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">หนังสือทั้งหมด</h1>
          <p className="mt-2 text-gray-600">
            ค้นพบหนังสือดิจิทัลคุณภาพสูงในหลากหลายหมวดหมู่
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-orange-600">{mockBooks.length}</div>
            <div className="text-sm text-gray-600">หนังสือทั้งหมด</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-orange-600">
              {mockBooks.reduce((sum, book) => sum + book.views, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">ยอดเข้าชมรวม</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-orange-600">
              {new Set(mockBooks.map(book => book.category)).size}
            </div>
            <div className="text-sm text-gray-600">หมวดหมู่</div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              {/* Cover Image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">📖</div>
                  <div className="text-xs text-gray-600 font-medium">
                    {book.category}
                  </div>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">
                  {book.title}
                </h3>
                
                <p className="text-xs text-gray-600 mb-2">
                  โดย {book.author}
                </p>
                
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                  {book.description}
                </p>

                {/* Stats */}
                <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                  <span>{book.pages} หน้า</span>
                  <span>{book.views.toLocaleString()} ครั้ง</span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(book.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-xs text-gray-600">
                      {book.rating}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                  อ่านหนังสือ
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              เร็วๆ นี้
            </h3>
            <p className="text-gray-600">
              เรากำลังเพิ่มหนังสือใหม่ๆ เข้ามาในระบบอย่างต่อเนื่อง
              <br />
              รอติดตามหนังสือดีๆ เพิ่มเติม
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}