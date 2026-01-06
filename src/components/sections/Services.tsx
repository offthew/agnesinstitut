import { motion, type Variants } from "motion/react"
import { Sparkles, Flower2, Heart, Eye, Sun, Leaf, ArrowRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SERVICES, BUSINESS } from "@/lib/constants"

const iconMap = {
  Sparkles: Sparkles,
  Flower2: Flower2,
  Heart: Heart,
  Eye: Eye,
  Sun: Sun,
  Leaf: Leaf,
}

export function Services() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  }

  return (
    <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden" id="soins">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-foreground"
          >
            Nos Soins
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground md:text-xl font-light"
          >
            Découvrez notre gamme complète de prestations bien-être, conçue pour révéler votre beauté naturelle dans un cadre apaisant.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Sparkles
            
            return (
              <motion.div key={service.id} variants={item} className="h-full">
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm group overflow-hidden">
                  <CardHeader className="pb-4 relative">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-xl font-playfair">{service.title}</CardTitle>
                    <div className="absolute top-6 right-6 text-sm font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                      {service.duration}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4 flex-grow">
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">
                      {service.price}
                    </span>
                    <Button 
                      asChild 
                      variant="ghost" 
                      className="group/btn hover:bg-primary/10 hover:text-primary p-0 h-auto font-medium"
                    >
                      <a href={BUSINESS.links.planity} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Réserver
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
