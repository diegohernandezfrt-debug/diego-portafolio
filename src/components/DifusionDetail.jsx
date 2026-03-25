
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DifusionDetail() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const images = [
    "image/dif1.png", "/public/image/dif2.png", "public/image/dif3.jpg",
    "public/image/dif4.jpeg", "public/image/dif5.jpeg", "public/image/dif6.jpeg",
    "public/image/dif7.jpeg"
  ];

  const videos = [
    { src: "public/Videos/Tec-1.mp4", title: "Video 1" },
    { src: "public/Videos/Tec-2.mp4", title: "Video 2" },
    { src: "public/Videos/Tec-3.mp4", title: "Video 3" }
  ];

  return (
    <div className="space-y-10">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h3 className="text-3xl font-bold mb-6">Departamento de Difusión – ITS Zacatecas Norte</h3>
        <p className="text-lg leading-relaxed">
          Durante mi <strong>servicio social</strong> participé activamente en la creación y gestión de materiales de comunicación institucional.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Elaboración de contenido multimedia, diseño de materiales informativos y publicaciones digitales para redes sociales, además de apoyo en organización y cobertura de eventos.
        </p>
      </motion.div>

      {/* Videos */}
      <div>
        <h4 className="text-2xl font-semibold mb-4">Proyectos Multimedia</h4>
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <video key={i} controls className="w-full rounded-2xl shadow-lg">
              <source src={video.src} type="video/mp4" />
            </video>
          ))}
        </div>
      </div>

      {/* Galería */}
      <div>
        <h4 className="text-2xl font-semibold mb-4">Galería de Diseño y Difusión</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Proyecto ${i + 1}`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setLightboxImg(src)}
              className="w-full aspect-video md:aspect-square object-cover rounded-2xl shadow-md cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-8" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="Ampliada" className="max-h-[90vh] max-w-[90vw] rounded-3xl shadow-2xl" />
        </div>
      )}
    </div>
  );
}
