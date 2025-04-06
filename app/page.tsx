import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative h-[600px] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/images/hero.jpg"
          alt="회사 소개 이미지"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">기업</h1>
          <p className="text-xl mb-8">최고의 품질과 혁신적인 솔루션으로 고객의 성공을 함께합니다</p>
          <a href="/contact" className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            문의하기
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-blue-500 text-4xl mb-4">🏢</div>
          <h2 className="text-2xl font-semibold mb-4">회사소개</h2>
          <p className="text-gray-600 mb-4">20년 이상의 경험을 바탕으로 고객에게 최고의 가치를 제공합니다.</p>
          <a href="/about" className="text-blue-500 hover:text-blue-600 font-medium">자세히 보기 →</a>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-blue-500 text-4xl mb-4">💡</div>
          <h2 className="text-2xl font-semibold mb-4">제품/서비스</h2>
          <p className="text-gray-600 mb-4">최신 기술을 활용한 혁신적인 제품과 서비스를 제공합니다.</p>
          <a href="/products" className="text-blue-500 hover:text-blue-600 font-medium">자세히 보기 →</a>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-blue-500 text-4xl mb-4">📞</div>
          <h2 className="text-2xl font-semibold mb-4">연락처</h2>
          <p className="text-gray-600 mb-4">언제든지 문의하세요. 전문 상담원이 친절하게 답변드립니다.</p>
          <a href="/contact" className="text-blue-500 hover:text-blue-600 font-medium">자세히 보기 →</a>
        </div>
      </section>

      <section className="bg-gray-50 py-16 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">주요 고객사</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-2">🏢</div>
                <p className="font-medium">고객사 {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">우리의 약속</h2>
          <p className="text-gray-600 mb-6">
            우리는 고객의 성공을 위해 최선을 다합니다. 
            최고의 품질과 서비스로 고객의 신뢰를 얻기 위해 노력합니다.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>최고의 품질 보장</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>24/7 기술 지원</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>맞춤형 솔루션 제공</span>
            </li>
          </ul>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/images/about.jpg"
            alt="회사 약속 이미지"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
