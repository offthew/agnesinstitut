import { motion, type Variants } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { REVIEWS } from "@/lib/constants";

export function Testimonials() {
  // Animation variants for staggered entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    },
  };

  return (
    <section className="py-24 bg-stone-50/50 overflow-hidden relative" id="avis">
      {/* Decorative background elements - subtle organic shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 opacity-30">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-rose-100/50 blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-stone-200/50 blur-[60px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4 tracking-tight">
              Ce que disent nos clientes
            </h2>
            <div className="h-1 w-20 bg-rose-300 mx-auto mb-6 rounded-full" />
            <p className="text-lg text-stone-600 font-light">
              Plus de <span className="font-semibold text-rose-900">510 avis 5 étoiles</span> sur Planity.
              <br className="hidden sm:block" />
              Votre satisfaction est notre plus belle récompense.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {REVIEWS.map((review) => (
            <motion.div key={review.id} variants={cardVariants} className="h-full">
              <Card className="h-full border-none shadow-md shadow-stone-200/50 hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm group overflow-hidden">
                <CardHeader className="pb-2 pt-6 relative">
                  {/* Decorative quote icon */}
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-rose-100/50 -scale-x-100" />
                  
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "fill-stone-200 text-stone-200"}`} 
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-stone-700 italic leading-relaxed text-sm md:text-[0.95rem]">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-stone-100 mt-auto">
                    <Avatar className="h-9 w-9 bg-rose-50 border border-rose-100">
                      <AvatarImage src="" /> {/* No image for now, use fallback */}
                      <AvatarFallback className="text-xs text-rose-700 font-medium">
                        {review.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-stone-900">{review.name}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">
                          {review.source}
                        </span>
                        <span className="text-[10px] text-stone-300">•</span>
                        <span className="text-[10px] text-stone-400">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Trust summary mobile/tablet footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm text-sm text-stone-600">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Moyenne de 4.9/5 sur l'ensemble des plateformes
          </div>
        </motion.div>
      </div>
    </section>
  );
}
