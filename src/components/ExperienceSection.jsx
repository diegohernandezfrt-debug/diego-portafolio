
import { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceModal from './ExperienceModal';
import AddAviationDetail from './AddAviationDetail';
import DifusionDetail from './DifusionDetail';
import SupermercadoDetail from './SupermercadoDetail';

const experiences = [
  {
    id: 1,
    title: "Residencia Profesional – Add Aviation",
    company: "Add Aviation",
    period: "2024 • 6 meses",
    color: "from-indigo-500 to-purple-600",
    component: AddAviationDetail
  },
  {
    id: 2,
    title: "Departamento de Difusión",
    company: "ITS Zacatecas Norte",
    period: "2023",
    color: "from-violet-500 to-fuchsia-600",
    component: DifusionDetail
  },
  {
    id: 3,
    title: "Bodega Noyola y Comercializadora Santa Fe",
    company: "Supermercado Santa Fe",
    period: "2022",
    color: "from-amber-500 to-orange-600",
    component: SupermercadoDetail
  }
];

export default function ExperienceSection() {
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (exp) => {
    setModalTitle(exp.title);
    setModalContent(<exp.component />);
  };

  return (
    <section id="experiencia" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Experiencia Laboral
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              onClick={() => openModal(exp)}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
            >
              <div className={`h-2 bg-gradient-to-r ${exp.color}`} />
              <div className="p-8">
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">{exp.period}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">{exp.company}</p>
                <div className="mt-8 text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver detalles completos →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal único */}
      <ExperienceModal
        isOpen={!!modalContent}
        onClose={() => {
          setModalContent(null);
          setModalTitle('');
        }}
        title={modalTitle}
      >
        {modalContent}
      </ExperienceModal>
    </section>
  );
}
