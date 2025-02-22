import { motion } from 'framer-motion';

type AboutType = {
  about: string;
};

const aboutData: AboutType = {
  about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum perspiciatis recusandae in corporis animi. Distinctio enim doloremque accusamus ducimus adipisci veritatis modi neque officiis, vel sit. Officiis, ab ipsam?' ,
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-primary/30">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary text-center mb-12">
          About Us
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-primary/50 backdrop-blur-lg rounded-lg p-6 text-center"
        >
          <p className="text-lg text-secondary/90 ">{aboutData.about}</p>
        </motion.div>
      </div>
    </section>
  );
}
