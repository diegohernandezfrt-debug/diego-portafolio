
import { motion } from 'framer-motion';

export default function AddAviationDetail() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h3 className="text-3xl font-bold mb-6">Residencia Profesional – Add Aviation</h3>
        <p className="text-lg leading-relaxed">
          Durante mi estancia en <strong>ADD Aviation</strong>, participé en el proceso de 
          <strong>documentación técnica</strong> de la aplicación web interna de la empresa, elaborando 
          manuales de uso funcionales orientados al personal administrativo.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Posteriormente, fui incorporado al equipo como <strong>colaborador administrativo</strong>, 
          donde me encargué de realizar <strong>la captura y gestión de información</strong> a través del sistema web.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Esta experiencia me permitió fortalecer mis habilidades en <strong>gestión de datos, organización de procesos 
          administrativos y documentación de sistemas tecnológicos</strong> dentro del sector aeronáutico.
        </p>
      </motion.div>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8">
        <h4 className="text-2xl font-semibold mb-6">Resumen del Proyecto</h4>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div><strong>Empresa:</strong> Add Aviation</div>
          <div><strong>Área:</strong> Documentación Técnica / Administración</div>
          <div><strong>Duración:</strong> 6 meses</div>
          <div><strong>Tecnologías:</strong> HTML, PHP, MySQL, Documentación Técnica</div>
        </div>
        <ul className="mt-8 space-y-3">
          <li className="flex items-start gap-3">• Creación de manual funcional del sistema web.</li>
          <li className="flex items-start gap-3">• Captura y control de bitácoras de mantenimiento.</li>
          <li className="flex items-start gap-3">• Gestión de fichas e indexación documentos aeronáuticos.</li>
        </ul>
      </div>
    </div>
  );
}