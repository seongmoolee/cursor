import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "회사 홈페이지",
  description: "회사 소개 및 제품 정보를 제공하는 웹사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x-7">
                <div>
                  <Link href="/" className="flex items-center py-4">
                    <Image
                      src="/images/logo.png"
                      alt="회사 로고"
                      width={150}
                      height={50}
                      className="h-12 w-auto"
                    />
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-6">
                  <Link href="/" className="py-4 px-2 text-gray-500 hover:text-gray-900 font-medium">홈</Link>
                  <Link href="/about" className="py-4 px-2 text-gray-500 hover:text-gray-900 font-medium">회사소개</Link>
                  <Link href="/products" className="py-4 px-2 text-gray-500 hover:text-gray-900 font-medium">제품/서비스</Link>
                  <Link href="/contact" className="py-4 px-2 text-gray-500 hover:text-gray-900 font-medium">연락처</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-8 mt-20">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">회사 정보</h3>
                <p className="text-gray-300">서울특별시 강남구 테헤란로 123</p>
                <p className="text-gray-300">02-123-4567</p>
                <p className="text-gray-300">contact@company.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">사이트 맵</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-300 hover:text-white">홈</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white">회사소개</Link></li>
                  <li><Link href="/products" className="text-gray-300 hover:text-white">제품/서비스</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white">연락처</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">소셜 미디어</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                  <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                  <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p>© 2024 회사명. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
