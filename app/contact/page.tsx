import Image from 'next/image'

export default function Contact() {
  return (
    <div className="space-y-16">
      <section className="relative h-[400px] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/images/contact-hero.jpg"
          alt="연락처 이미지"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">연락처</h1>
          <p className="text-xl">언제든지 문의해 주세요</p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">연락처 정보</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">주소</h3>
              <p className="text-gray-600">서울특별시 강남구 테헤란로 123</p>
              <p className="text-gray-600">회사빌딩 5층</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">전화</h3>
              <p className="text-gray-600">02-123-4567</p>
              <p className="text-gray-600">팩스: 02-123-4568</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">이메일</h3>
              <p className="text-gray-600">contact@company.com</p>
              <p className="text-gray-600">support@company.com</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">영업 시간</h3>
              <p className="text-gray-600">평일: 09:00 - 18:00</p>
              <p className="text-gray-600">토요일: 09:00 - 13:00</p>
              <p className="text-gray-600">일요일: 휴무</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">문의하기</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">이름</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">이메일</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="이메일을 입력하세요"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">문의 유형</label>
              <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>제품 문의</option>
                <option>서비스 문의</option>
                <option>기술 지원</option>
                <option>기타</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">메시지</label>
              <textarea
                className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="메시지를 입력하세요"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              보내기
            </button>
          </form>
        </div>
      </section>

      <section className="bg-gray-50 py-16 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">찾아오시는 길</h2>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/map.jpg"
              alt="회사 위치 지도"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-8 text-left">
            <h3 className="text-xl font-semibold mb-4">대중교통 이용 시</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 지하철 2호선 강남역 3번 출구에서 도보 5분</li>
              <li>• 버스 정류장: 강남역.강남역사거리 하차</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 