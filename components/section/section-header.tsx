import { motion } from "motion/react"

/*
* om
*/
export default function SectionHeader({
  titleP1,
  titleP2,
  titleP3,
  badge,
  description
}: {
  titleP1: string,
  titleP2?: string,
  titleP3?: string,
  description: string,
  badge?: string
  // titleClassName?: string
  // desClassName?: string
  // badgeClassName?: string
}) {
  return (
    <div className="container mx-auto px-4 md:px-8 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        {badge && (
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-widest uppercase border border-primary/30 rounded-full text-primary">
            {badge}
          </span>
        )}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-grotesque font-semibold mb-6 relative text-center text-foreground leading-snug tracking-tight">
          {titleP1} {titleP2 && <span className="font-serif italic font-normal">{titleP2}</span>}
          {titleP3 && (
            <>
              <br />{titleP3}
            </>
          )}
        </h2>
        <p className="max-w-md mx-auto text-center text-muted-foreground">
          {description}
        </p>
      </motion.div>
    </div>
  )
}
