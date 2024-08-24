"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, ShoppingCart, ChevronDown, Menu, Search } from "lucide-react"

const laptops = [
  {
    brand: "Apple",
    title:
      "2025 MacBook Air 13-inch Laptop with M4 chip: Built for Apple Intelligence, 13.6-inch Liquid Retina Display, 16GB Unified...",
    image: "bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500",
    price: "799",
    originalPrice: "999.00",
    rating: 4.8,
    reviews: "1.7K",
    boughtCount: "10K+ bought in past month",
    options: "3 capacities",
    specs: {
      displaySize: "13.6 inches",
      diskSize: "256 GB",
      ram: "-",
      os: "Mac OS",
    },
    prime: true,
    delivery: "FREE delivery Fri, Aug 15",
    nonPrimeDelivery: "Mon, Aug 18",
  },
  {
    brand: "HP",
    title:
      "14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11 Home, Thin & ...",
    image: "bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600",
    price: "171",
    originalPrice: "229.99",
    rating: 4.1,
    reviews: "3.7K",
    boughtCount: "9K+ bought in past month",
    specs: {
      displaySize: "14 inches",
      diskSize: "64 GB",
      ram: "4 GB",
      os: "Windows 11 S",
    },
    prime: true,
    delivery: "FREE delivery",
    deliveryTime: "Overnight 7AM - 11AM",
  },
]

export function ShoppingInterface() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <div className="bg-white h-[500px] flex flex-col text-sm">
      {/* Amazon Header */}
      <div className="bg-gray-900 text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-white font-bold text-xl">amazon</div>
          <div className="flex items-center space-x-1 text-sm">
            <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
            </div>
            <span className="text-xs">
              Deliver to Andrew
              <br />
              Arcadia 91007
            </span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex">
            <button className="bg-gray-200 text-gray-700 px-3 py-2 text-xs border border-gray-300 rounded-l">
              All <ChevronDown className="w-3 h-3 ml-1 inline" />
            </button>
            <input type="text" value="laptops" readOnly className="flex-1 px-3 py-2 text-gray-900 text-sm" />
            <button className="bg-orange-400 px-4 py-2 rounded-r">
              <Search className="w-4 h-4 text-gray-900" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm">
          <div className="text-xs">
            <div>Hello, Andrew</div>
            <div className="font-bold">Account & Lists</div>
          </div>
          <div className="text-xs">
            <div>Returns</div>
            <div className="font-bold">& Orders</div>
          </div>
          <div className="flex items-center">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-orange-400 font-bold ml-1">0</span>
            <span className="ml-1">Cart</span>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-gray-800 text-white px-4 py-2 flex items-center space-x-4 text-sm">
        <button className="flex items-center space-x-1">
          <Menu className="w-4 h-4" />
          <span>All</span>
        </button>
        <span className="bg-orange-400 text-gray-900 px-2 py-1 rounded text-xs font-medium">🐕 Rufus</span>
        <span>Amazon Haul</span>
        <span>Same-Day Delivery</span>
        <span>Medical Care</span>
        <span>Luxury</span>
        <span>Andrew's Amazon.com</span>
        <span>Buy Again</span>
        <span>Browsing History</span>
        <span>Pet Supplies</span>
      </div>

      {/* Results Header */}
      <div className="px-4 py-2 border-b border-gray-200 flex items-center justify-between">
        <div className="text-sm">
          1-16 of over 6,000 results for <span className="text-orange-600 font-medium">"laptops"</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span>Sort by:</span>
          <button className="flex items-center space-x-1 border border-gray-300 px-2 py-1 rounded">
            <span>Best Sellers</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-64 p-4 border-r border-gray-200 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-sm mb-2">Popular Shopping Ideas</h3>
              <div className="space-y-1 text-sm text-blue-600">
                <div>Windows</div>
                <div>Clearance</div>
                <div>Budget</div>
                <div>Gaming</div>
                <div className="text-blue-600">🔽 See more</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-2">Eligible for Free Shipping</h3>
              <div className="space-y-1 text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-3 h-3" />
                  <span>Free Shipping by Amazon</span>
                </label>
                <div className="text-xs text-gray-600 ml-5">Get FREE Shipping on eligible orders shipped by Amazon</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-2">Display Size</h3>
              <div className="space-y-1 text-sm">
                {[
                  "17 Inches & Above",
                  "16 to 16.9 Inches",
                  "15 to 15.9 Inches",
                  "14 to 14.9 Inches",
                  "13 to 13.9 Inches",
                ].map((size, i) => (
                  <label key={i} className="flex items-center space-x-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-2">Brands</h3>
              <div className="space-y-1 text-sm">
                {["HP", "Dell", "Lenovo", "Apple", "ASUS", "acer", "Samsung"].map((brand, i) => (
                  <label key={i} className="flex items-center space-x-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Results */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-1">Results</h2>
            <p className="text-sm text-gray-600">Check each product page for other buying options.</p>
          </div>

          <div className="space-y-6">
            {laptops.map((laptop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-200 pb-6"
                onHoverStart={() => setHoveredProduct(index)}
                onHoverEnd={() => setHoveredProduct(null)}
              >
                <div className="flex space-x-4">
                  {/* Product Image */}
                  <div className="w-48 h-36 flex-shrink-0">
                    <div className={`w-full h-full ${laptop.image} rounded flex items-center justify-center`}>
                      <div className="w-32 h-20 bg-white/20 rounded backdrop-blur-sm flex items-center justify-center">
                        <div className="w-24 h-16 bg-white/30 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="text-blue-600 hover:text-orange-600 hover:underline cursor-pointer text-base leading-tight">
                        {laptop.title}
                      </h3>
                      {laptop.options && (
                        <div className="text-sm text-gray-600 mt-1">
                          <span className="font-medium">Options:</span>{" "}
                          <span className="text-blue-600">{laptop.options}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-1">{laptop.rating}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < Math.floor(laptop.rating) ? "text-orange-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-blue-600 text-sm ml-1">({laptop.reviews})</span>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 mb-2">{laptop.boughtCount}</div>

                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-2xl font-medium">
                        <span className="text-sm align-top">$</span>
                        {laptop.price}
                        <span className="text-sm">00</span>
                      </span>
                      <span className="text-sm text-gray-600">
                        List: <span className="line-through">${laptop.originalPrice}</span>
                      </span>
                    </div>

                    {laptop.prime && (
                      <div className="mb-2">
                        <span className="text-blue-600 text-sm font-medium">Join Prime</span>
                        <span className="text-sm"> to get {laptop.delivery}</span>
                        {laptop.deliveryTime && <div className="text-sm">{laptop.deliveryTime}</div>}
                        <div className="text-sm">Or Non-members get FREE delivery {laptop.nonPrimeDelivery}</div>
                      </div>
                    )}

                    <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-1 rounded text-sm font-medium mb-2">
                      Add to cart
                    </button>

                    <div className="text-sm">
                      <div className="font-medium mb-1">More Buying Choices</div>
                      <div className="text-gray-600">$791.01 (5+ used & new offers)</div>
                    </div>
                  </div>

                  {/* Specs Sidebar */}
                  <div className="w-48 text-sm space-y-1">
                    <div>
                      <span className="font-medium">Display Size:</span> {laptop.specs.displaySize}
                    </div>
                    <div>
                      <span className="font-medium">Disk Size:</span> {laptop.specs.diskSize}
                    </div>
                    <div>
                      <span className="font-medium">RAM:</span> {laptop.specs.ram}
                    </div>
                    <div>
                      <span className="font-medium">Operating System:</span> {laptop.specs.os}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
