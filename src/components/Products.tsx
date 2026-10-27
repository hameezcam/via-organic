import React from 'react';
import Image from 'next/image';
import { MessageSquare, Tag } from 'lucide-react';
import { PRODUCTS_DATA, buildWhatsAppLink } from '@/data/siteData';

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-sand-light/40 border-b border-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-forest-light mb-3 inline-block">
            From Our Farms
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-6">
            Organic Products
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            Grown and made by the VIA family of companies in Sri Lanka, for local and export markets. Message us for current prices and availability.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS_DATA.map((product) => {
            const whatsappUrl = buildWhatsAppLink(
              `Hello VIA Organic, I would like prices and availability for your ${product.name}.`
            );

            return (
              <div
                key={product.id}
                className="group rounded-3xl bg-white border border-sand/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-56 w-full bg-sand/30 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                    {/* Category Tag */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-1 text-white/90 text-xs font-medium bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      <Tag className="w-3 h-3 text-gold" />
                      <span>{product.category}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-serif text-xl font-bold text-forest group-hover:text-forest-light transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-6 line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Footer with Price and Order Button */}
                <div className="p-6 pt-0 border-t border-sand/40 mt-auto">
                  <div className="pt-4" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-forest/90 hover:bg-forest text-sand-light text-xs sm:text-sm font-semibold transition-all group/order active:scale-95 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-300" />
                    <span>Ask for Price on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
