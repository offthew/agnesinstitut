import { motion, type Variants } from "motion/react";
import { MapPin, Phone, Clock, Mail, Calendar, ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="py-24 bg-rose-50/30 relative overflow-hidden" id="contact">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-rose-100/20 to-transparent -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
              Contactez-nous
            </h2>
            <div className="w-20 h-1 bg-rose-300 mx-auto rounded-full mb-6" />
            <p className="text-stone-600 max-w-2xl mx-auto">
              Prenez rendez-vous pour une parenthèse de douceur ou contactez-nous pour toute question sur nos soins.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Info Cards */}
              <div className="grid gap-6">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-rose-100 rounded-full text-rose-600 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-stone-800 text-lg mb-1">Adresse</h3>
                      <p className="text-stone-600 leading-relaxed">
                        {BUSINESS.address.street}
                        <br />
                        {BUSINESS.address.postalCode} {BUSINESS.address.city}
                      </p>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address.full)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-500 hover:text-rose-700 text-sm font-medium mt-2 inline-flex items-center gap-1 transition-colors"
                      >
                        Voir sur la carte <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-rose-100 rounded-full text-rose-600 shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-stone-800 text-lg mb-1">Téléphone</h3>
                      <p className="text-stone-600 mb-2">Pour prendre rendez-vous ou nous joindre :</p>
                      <div className="flex flex-col gap-1">
                        <a 
                          href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} 
                          className="text-stone-800 hover:text-rose-600 font-semibold transition-colors text-lg"
                        >
                          {BUSINESS.phone}
                        </a>
                        {BUSINESS.phoneSecondary && (
                          <a 
                            href={`tel:${BUSINESS.phoneSecondary.replace(/\s/g, '')}`} 
                            className="text-stone-600 hover:text-rose-600 transition-colors"
                          >
                            {BUSINESS.phoneSecondary}
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-rose-100 rounded-full text-rose-600 shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="w-full">
                      <h3 className="font-medium text-stone-800 text-lg mb-3">Horaires d'ouverture</h3>
                      <ul className="space-y-2 text-sm">
                        {BUSINESS.hours.map((schedule, index) => (
                          <li key={index} className="flex justify-between items-center border-b border-stone-100 last:border-0 pb-2 last:pb-0">
                            <span className="font-medium text-stone-700 w-24">{schedule.day}</span>
                            <span className={schedule.hours === "Fermé" ? "text-stone-400 italic" : "text-stone-600"}>
                              {schedule.hours}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden shadow-lg h-64 w-full relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-stone-200 z-0" />
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 z-10 bg-white/10 backdrop-blur-[2px] group-hover:bg-white/5 transition-colors">
                  <MapPin className="w-10 h-10 text-rose-500 drop-shadow-sm" />
                  <span className="font-medium text-stone-600 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                    Carte Google Maps
                  </span>
                </div>
                {/* Simulated map details */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-lg shadow-sm z-20 text-xs text-stone-500">
                  {BUSINESS.address.full}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="border-none shadow-xl bg-white overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-rose-300 to-rose-400" />
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-light text-stone-800 mb-2">Envoyez-nous un message</h3>
                    <p className="text-stone-500 text-sm">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-stone-700">Nom complet</label>
                        <Input 
                          id="name" 
                          placeholder="Votre nom" 
                          className="bg-stone-50 border-stone-200 focus:border-rose-300 focus:ring-rose-100 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-stone-700">Téléphone</label>
                        <Input 
                          id="phone" 
                          placeholder="Votre numéro" 
                          type="tel"
                          className="bg-stone-50 border-stone-200 focus:border-rose-300 focus:ring-rose-100 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-stone-700">Email</label>
                      <Input 
                        id="email" 
                        placeholder="votre@email.com" 
                        type="email"
                        className="bg-stone-50 border-stone-200 focus:border-rose-300 focus:ring-rose-100 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-stone-700">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="Comment pouvons-nous vous aider ?" 
                        className="min-h-[150px] bg-stone-50 border-stone-200 focus:border-rose-300 focus:ring-rose-100 transition-all resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-stone-800 hover:bg-stone-700 text-white h-12 text-lg font-light tracking-wide transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Envoyer le message <Mail className="ml-2 w-4 h-4" />
                    </Button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-stone-100 text-center">
                    <p className="text-stone-600 mb-4 font-medium">Vous préférez réserver directement ?</p>
                    <Button 
                      asChild 
                      className="w-full bg-rose-500 hover:bg-rose-600 text-white h-14 text-lg font-medium transition-all duration-300 shadow-rose-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <a 
                        href={BUSINESS.links.planity} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-5 h-5" />
                        Réserver sur Planity
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
