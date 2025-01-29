import Image from "next/image"
import Link from "next/link"
import { Search, Heart, User, ShoppingCart } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-[#A29875] px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-serif">
          <Image
          src="/image1.png"
          alt="logo"
          width={200}
          height={139}
          />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex relative flex-1 max-w-xl mx-8">
          <input
            type="text"
            placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
            className="w-full px-4 py-2 rounded-md text-sm focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2">
            <Search className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-white">
          <button className="hover:opacity-80">
            <Heart className="w-6 h-6" />
          </button>
          <button className="hover:opacity-80">
            <User className="w-6 h-6" />
          </button>
          <button className="hover:opacity-80">
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide leading-tight">
              IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
            <p className="text-bl text-[#787054] text-lg leading-relaxed">
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of
              our desirable collection.
            </p>
            <button className="bg-[#787054] text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors">
              Explore Now
            </button>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px]">
            <Image
              src="/image.png"
              alt="Elegant jewelry model"
              width={421.38}
              height={573.59}
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  )
}
