export default function About() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">회사소개</h1>
        <p className="text-xl text-gray-600">우리 회사의 역사와 비전</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">회사 역사</h2>
          <p className="text-gray-600">
            우리 회사는 2000년에 설립되어 현재까지 성장해왔습니다.
            고객 중심의 서비스와 혁신적인 기술로 시장을 선도해왔습니다.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">비전</h2>
          <p className="text-gray-600">
            우리는 고객에게 최고의 가치를 제공하는 것을 목표로 합니다.
            지속적인 혁신과 발전을 통해 더 나은 미래를 만들어갑니다.
          </p>
        </div>
      </section>
    </div>
  )
} 