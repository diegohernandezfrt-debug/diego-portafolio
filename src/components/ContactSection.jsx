
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState(''); // '' | 'enviando' | 'ok' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('enviando');

    emailjs.sendForm(
      'service_fwi1ct7',      
      'template_6wssb6s',     
      form.current,
      '6dVLc88E1tH-NTs2Q'       
    )
    .then(() => {
      setStatus('ok');
      form.current.reset();
      setTimeout(() => setStatus(''), 4000);
    })
    .catch(() => {
      setStatus('error');
      setTimeout(() => setStatus(''), 4000);
    });
  };

  return (
    <section id="contacto" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-6"
        >
          ¿Hablemos?
        </motion.h2>
        <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-16">
          Envíame un mensaje y te respondo en menos de 24 horas
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Tu nombre"
              required
              className="w-full px-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Tu correo"
              required
              className="w-full px-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="¿En qué puedo ayudarte?"
            required
            className="w-full px-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={status === 'enviando'}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-5 rounded-2xl font-semibold text-lg transition-all"
          >
            {status === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
          </motion.button>
        </form>

        {status === 'ok' && (
          <p className="mt-6 text-center text-green-500 font-medium">✅ Mensaje enviado con éxito. ¡Gracias!</p>
        )}
        {status === 'error' && (
          <p className="mt-6 text-center text-red-500 font-medium">❌ Hubo un error. Inténtalo de nuevo.</p>
        )}

        <div className="mt-16 text-center space-y-3 text-gray-600 dark:text-gray-400">
          <p>📧 diegohernandezfrt@gmail.com</p>
          <p>📱 498 136 3599</p>
          <p>📍 Río Grande, Zacatecas</p>
          <a href="https://www.linkedin.com/in/diego-hernández-ramírez-a82a0224b" target="_blank" className="text-blue-600 hover:underline block">
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
