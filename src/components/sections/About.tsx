
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-[#FDFBF7] overflow-hidden" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Organic shape background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#E8D4C3]/30 to-[#C6A88F]/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-pulse-slow -z-10 blur-3xl" />
            
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl bg-[#C6A88F]/10 border border-[#C6A88F]/20">
              {/* Image Placeholder - Awaiting real photography */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8D4C3] to-[#BFA08E] flex items-center justify-center text-[#5A4538]/50">
                <span className="sr-only">Portrait d'Agnès Foucaud</span>
                <Sparkles className="w-16 h-16 opacity-30" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white/90">
                <div className="text-sm font-medium uppercase tracking-widest mb-1">Fondatrice</div>
                <div className="text-2xl font-serif">Agnès Foucaud</div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 md:right-0 bg-white p-6 rounded-xl shadow-xl border border-[#C6A88F]/10 max-w-[200px] hidden md:block"
            >
              <div className="text-3xl font-serif text-[#C6A88F] mb-1">15+</div>
              <div className="text-sm text-[#5A4538] leading-tight">Années d'expérience à votre service</div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#C6A88F]/10 text-[#8C6B52] text-sm font-medium tracking-wide mb-4">
                À PROPOS
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#4A3B32] mb-6 leading-tight">
                L'excellence beauté <br/>
                <span className="text-[#C6A88F] italic">au cœur de Salles</span>
              </h2>
            </div>

            <div className="space-y-6 text-[#6B5A4E] text-lg leading-relaxed font-light">
              <p>
                Bienvenue chez <strong className="font-medium text-[#5A4538]">{BUSINESS.fullName}</strong>. C'est dans une grande maison pleine de charme aux volets verts, située sur la célèbre <span className="whitespace-nowrap">{BUSINESS.address.street}</span>, que je vous accueille pour une parenthèse de douceur hors du temps.
              </p>
              
              <p>
                Depuis la création de l'institut, j'ai à cœur de proposer bien plus que de simples soins esthétiques. Ma philosophie repose sur une approche bienveillante et personnalisée, où chaque rendez-vous est une invitation à se reconnecter avec soi-même.
              </p>
              
              <p>
                L'atmosphère y est familiale et chaleureuse, propice à la détente absolue. Que vous veniez pour un soin visage éclat, une épilation précise ou un moment de relaxation, mon expertise et mon attention aux détails garantissent une expérience de haute qualité, comme en témoignent plus de <strong className="font-medium text-[#5A4538]">{BUSINESS.stats.planityReviews} avis clients</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-[#C6A88F] hover:bg-[#BFA08E] text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => window.open(BUSINESS.links.planity, '_blank')}
              >
                Prendre rendez-vous
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#C6A88F] text-[#8C6B52] hover:bg-[#C6A88F]/5 rounded-full px-8 py-6 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Découvrir les soins
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
