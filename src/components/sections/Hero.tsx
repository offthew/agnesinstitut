import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative overflow-hidden w-full py-20 lg:py-32 min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-brand-50 via-white to-lavender-50 dark:from-brand-950 dark:via-background dark:to-lavender-950">
      
      {/* Decorative Background Elements - Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0], 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-brand-200/40 dark:bg-brand-800/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0], 
            x: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-[20%] -right-[5%] w-[400px] h-[400px] bg-lavender-200/40 dark:bg-lavender-800/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] bg-brand-100/30 dark:bg-brand-900/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 z-10 flex flex-col items-center text-center max-w-4xl">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
        >
          <Badge 
            variant="outline" 
            className="px-4 py-1.5 text-sm font-medium border-brand-200 bg-white/50 text-brand-700 backdrop-blur-sm dark:border-brand-800 dark:bg-brand-950/50 dark:text-brand-300 rounded-full shadow-sm hover:bg-white/80 transition-colors"
          >
            Institut de beauté à Salles
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
        >
          Votre havre de beauté <br className="hidden md:block" />
          au cœur de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-lavender-600 dark:from-brand-400 dark:to-lavender-400">Salles</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
        >
          Prenez soin de vous, vous le méritez. Découvrez une expérience unique de bien-être et de beauté.
          <span className="block mt-2 font-medium text-brand-700 dark:text-brand-300">
            ★★★★★ 510+ avis 5 étoiles sur Planity
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg shadow-lg shadow-brand-200/50 dark:shadow-none hover:shadow-xl hover:shadow-brand-200/60 transition-all duration-300 bg-brand-600 hover:bg-brand-700 text-white border-none cursor-pointer"
            onClick={() => window.open('https://www.planity.com/foucaud-agnes-33770-salles', '_blank')}
            aria-label="Réserver un rendez-vous sur Planity"
          >
            Réserver sur Planity
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg border-2 border-brand-200 text-brand-700 hover:bg-brand-50 hover:text-brand-800 hover:border-brand-300 dark:border-brand-800 dark:text-brand-300 dark:hover:bg-brand-900/50 transition-all duration-300 cursor-pointer"
            aria-label="Découvrir nos soins"
          >
            Découvrir nos soins
          </Button>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        >
          {/* Abstract Image Container Shape */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-lavender-100 dark:from-brand-900 dark:to-lavender-900 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] shadow-2xl animate-[morph_8s_ease-in-out_infinite] overflow-hidden border-4 border-white/30 dark:border-white/10 backdrop-blur-md flex items-center justify-center">
            
             {/* Actual Image (Placeholder for now) */}
             <div className="w-full h-full bg-[url('/images/hero-placeholder.svg')] bg-cover bg-center opacity-90 hover:scale-105 transition-transform duration-700" role="img" aria-label="Ambiance institut de beauté" />
             
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-brand-500/20 to-transparent pointer-events-none" />
          </div>

          {/* Decorative Ring */}
          <div className="absolute -inset-4 border-2 border-brand-200/50 dark:border-brand-700/30 rounded-[50%_50%_50%_50%/50%_50%_50%_50%] animate-[spin_20s_linear_infinite] pointer-events-none -z-10" style={{ animationDuration: '30s' }} />
          <div className="absolute -inset-8 border border-lavender-200/30 dark:border-lavender-700/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[spin_15s_linear_infinite_reverse] pointer-events-none -z-10" />
        </motion.div>
      </div>
      
      {/* CSS for custom morph animation if not in global css */}
      <style>{`
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
      `}</style>
    </section>
  );
}
