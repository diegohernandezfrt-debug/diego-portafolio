
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SupermercadoDetail() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const images = [
    "public/image/GafeteDel.png", "public/image/GafeteDet.png",
    "public/image/Logo1.png", "public/image/logo2.png",
    "public/image/Banner1.png", "public/image/Banner2.png",
    "public/image/Banner3.png", "public/image/Banner4.png"
  ];

  return (
    <div className="space-y-10">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h3 className="text-3xl font-bold mb-6">Comercializadora Santa Fé & Bodega Noyola</h3>
        <p className="text-lg leading-relaxed">
          Me desempeñé en el área de sistemas y soporte técnico, realizando captura y actualización de inventarios, configuración de básculas, soporte a equipos y diseño de banners promocionales.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Diseñé un logotipo representativo para Supermercado Santa Fe y mejoré la identidad visual del punto de venta.
        </p>
      </motion.div>

      {/* Galería */}
      <div>
        <h4 className="text-2xl font-semibold mb-4">Galería de Diseños y Gafetes</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Diseño ${i + 1}`}
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