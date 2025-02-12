import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { IoLogoVercel } from "react-icons/io5";
import { RiVercelLine } from "react-icons/ri";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>Em breve!</span> 
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>
      <br/>
      {/* <motion.img
        src="/logo_1.png"
        alt="logo"
        className="mx-auto h-20 w-22"
        variants={itemVariants}
      /> */}
      <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-2 select-none">
        <div className="flex items-center justify-center gap-2 select-none">
          <TextBlur
        className="text-5xl font-bold tracking-tight sm:text-7xl select-none"
        text="EU"
          />
          <RiVercelLine className="h-20 w-20 fill-red-600 select-none" />
        </div>
        <TextBlur
          className="text-5xl font-bold tracking-tight sm:text-7xl select-none"
          text="MINAS"
        />
      </motion.div>
      
      

      {/* <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-3xl font-medium tracking-tighter sm:text-5xl"
          text="Bem vindo ao mais novo site de Minas Gerais!"
        />
      </motion.div> */}

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg"
          text="Faça parte da lista de espera para você ficar por dentro de o que vamos entregar neste projeto!"
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
