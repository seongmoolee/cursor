import Image from 'next/image'

export default function About() {
  return (
    <div className="space-y-16">
      <section className="relative h-[400px] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/images/about-hero.jpg"
          alt="회사 소개 이미지"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">회사소개</h1>
          <p className="text-xl">혁신과 성장의 역사</p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">회사 역사</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">2000년</h3>
              <p className="text-gray-600">회사 설립 및 첫 제품 출시</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2005년</h3>
              <p className="text-gray-600">해외 시장 진출 및 글로벌 확장</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2010년</h3>
              <p className="text-gray-600">기술 혁신 센터 설립</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2020년</h3>
              <p className="text-gray-600">AI 기술 도입 및 디지털 전환 가속화</p>
            </div>
          </div>
        </div>
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/images/history.jpg"
            alt="회사 역사 이미지"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-gray-50 py-16 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">핵심 가치</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">혁신</h3>
              <p className="text-gray-600">지속적인 기술 혁신으로 시장을 선도합니다</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">신뢰</h3>
              <p className="text-gray-600">고객과의 신뢰를 최우선으로 생각합니다</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">성장</h3>
              <p className="text-gray-600">함께 성장하는 파트너십을 추구합니다</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/images/vision.jpg"
            alt="회사 비전 이미지"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">비전</h2>
          <p className="text-gray-600 mb-6">
            우리는 기술 혁신을 통해 더 나은 미래를 만들어갑니다.
            고객의 성공이 우리의 성공이라는 믿음으로,
            최고의 품질과 서비스를 제공합니다.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>글로벌 시장 선도 기업</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>지속 가능한 성장</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>사회적 책임 실현</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
} 