import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
  return (
    <div className="space-y-16">
      <section className="relative h-[400px] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/images/products-hero.jpg"
          alt="제품 소개 이미지"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">제품/서비스</h1>
          <p className="text-xl">최고의 품질과 혁신적인 솔루션</p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
            <Image
              src="/images/product-a.jpg"
              alt="제품 A 이미지"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">제품 A</h2>
          <p className="text-gray-600 mb-4">
            최신 AI 기술을 활용한 혁신적인 제품입니다.
            사용자 친화적인 인터페이스와 강력한 성능을 제공합니다.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>실시간 데이터 분석</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>자동화된 프로세스</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>클라우드 기반 솔루션</span>
            </li>
          </ul>
          <Link href="/contact" className="text-blue-500 hover:text-blue-600 font-medium">
            문의하기 →
          </Link>
        </div>

        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
            <Image
              src="/images/product-b.jpg"
              alt="제품 B 이미지"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">제품 B</h2>
          <p className="text-gray-600 mb-4">
            업계 최고의 성능과 안정성을 자랑하는 제품입니다.
            다양한 산업에서 검증된 솔루션을 제공합니다.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>고성능 처리 능력</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>확장 가능한 아키텍처</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>엔터프라이즈급 보안</span>
            </li>
          </ul>
          <Link href="/contact" className="text-blue-500 hover:text-blue-600 font-medium">
            문의하기 →
          </Link>
        </div>

        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
            <Image
              src="/images/service.jpg"
              alt="서비스 이미지"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">서비스</h2>
          <p className="text-gray-600 mb-4">
            전문적인 기술 지원과 맞춤형 솔루션을 제공합니다.
            고객의 요구에 맞는 최적의 서비스를 제공합니다.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>24/7 기술 지원</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>맞춤형 컨설팅</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>교육 및 트레이닝</span>
            </li>
          </ul>
          <Link href="/contact" className="text-blue-500 hover:text-blue-600 font-medium">
            문의하기 →
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-16 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">고객 성공 사례</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-2">A 기업</h3>
              <p className="text-gray-600">
                &ldquo;제품 A 도입 후 생산성이 40% 향상되었습니다.
                사용하기 쉽고 안정적인 시스템입니다.&rdquo;
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-2">B 기업</h3>
              <p className="text-gray-600">
                &ldquo;맞춤형 서비스 덕분에 비즈니스 프로세스가
                효율적으로 개선되었습니다.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 