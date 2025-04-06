export default function Contact() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">연락처</h1>
        <p className="text-xl text-gray-600">언제든지 연락주세요</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">연락처 정보</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              <span className="font-semibold">주소:</span> 서울특별시 강남구 테헤란로 123
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">전화:</span> 02-123-4567
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">이메일:</span> contact@company.com
            </p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">문의하기</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">이름</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">이메일</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">메시지</label>
              <textarea className="w-full p-2 border rounded h-32"></textarea>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              보내기
            </button>
          </form>
        </div>
      </section>
    </div>
  )
} 