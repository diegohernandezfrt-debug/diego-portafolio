
import { motion } from 'framer-motion';

const certificates = [
  { title: "Certificación Microsoft Office", file: "public/documents/Certificado de Microsoft Office.pdf" },
  { title: "Fundamentos de Nube AWS", file: "public/documents/Certificate Fundamentos de Nube AWS.pdf" },
  { title: "Diplomado en Educación Financiera", file: "public/documents/Certificado de Educacion Financiera.pdf" },
  { title: "Programación en Android", file: "public/documents/Certificado de Curso de Android.pdf" }
];

export default function CoursesSection() {
  return (
    <section id="cursos" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Cursos y Certificaciones
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl p-6"
            >
              <iframe
                src={cert.file}
                className="w-full h-80 rounded-2xl border border-gray-200 dark:border-gray-700"
                title={cert.title}
              />
              <div className="mt-6 text-center">
                <h3 className="font-semibold text-xl text-gray-900 dark:text-white">{cert.title}</h3>
                <a
                  href={cert.file}
                  target="_blank"
                  className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl text-sm font-medium transition-all"
                >
                  Ver PDF completo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}