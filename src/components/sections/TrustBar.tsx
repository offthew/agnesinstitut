import { motion } from "motion/react";
import { TRUST_BADGES } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="relative w-full py-12 bg-brand-50/50 border-y border-brand-100/30 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
          {TRUST_BADGES.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className={`
                relative flex flex-col items-center justify-center text-center px-4
                ${index !== TRUST_BADGES.length - 1 ? 'md:border-r md:border-brand-200/40' : ''}
              `}
            >
              <span className="text-4xl md:text-5xl font-serif font-medium text-brand-600 mb-3 group-hover:scale-105 transition-transform duration-300">
                {badge.value}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-900">
                  {badge.label}
                </span>
                <span className="text-xs text-muted-foreground font-light">
                  {badge.sublabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
