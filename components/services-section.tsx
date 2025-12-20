import { motion } from 'motion/react';
import { Code, Palette, Zap, ShoppingBag, BarChart3, Headphones } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Custom Theme Development',
    description: 'Bespoke Shopify themes built from scratch. Pixel-perfect designs that convert visitors into customers.',
    tags: ['Liquid', 'Dawn', 'Custom CSS']
  },
  {
    icon: Code,
    title: 'Headless Commerce',
    description: 'Lightning-fast storefronts using Hydrogen, Next.js, or React. Ultimate flexibility and performance.',
    tags: ['Hydrogen', 'Storefront API', 'GraphQL']
  },
  {
    icon: ShoppingBag,
    title: 'Store Setup & Migration',
    description: 'Seamless migration from WooCommerce, Magento, or custom platforms. Zero downtime guaranteed.',
    tags: ['Migration', 'Data Transfer', 'SEO']
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed audits and optimization to achieve sub-second load times. Better UX, higher conversions.',
    tags: ['Core Web Vitals', 'Speed', 'UX']
  },
  {
    icon: BarChart3,
    title: 'Conversion Rate Optimization',
    description: 'A/B testing, analytics setup, and UX improvements to maximize your store revenue.',
    tags: ['Analytics', 'A/B Testing', 'Growth']
  },
  {
    icon: Headphones,
    title: 'Ongoing Support & Maintenance',
    description: 'Dedicated support team for updates, bug fixes, and continuous improvements.',
    tags: ['24/7 Support', 'Updates', 'Monitoring']
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-widest uppercase border border-primary/30 rounded-full text-primary">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-mono font-semibold text-foreground mb-6">
            Full-Stack <span className="font-serif italic font-normal">Shopify</span> Services
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            From concept to launch and beyond. Everything you need to build and scale your e-commerce business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 mb-6 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-mono font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
