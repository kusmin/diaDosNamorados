import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Shield, Sparkles, ChevronDown } from 'lucide-react';
import './App.css';
import heroImage from './assets/hero_image.png';
import armaduraCoracao from './assets/armadura_coracao.png';

function App() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Criar partículas cósmicas
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 6,
      });
    }
    setParticles(newParticles);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen cosmic-bg text-white">
      {/* Partículas cósmicas */}
      <div className="cosmic-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="hero-title golden-text mb-4">
              Meu Amor Celestial
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Uma Saga de Dois Corações
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              "Assim como os Cavaleiros protegem Atena, eu protegerei nosso amor por toda a eternidade"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12"
          >
            <img
              src={heroImage}
              alt="Casal de Cavaleiros"
              className="max-w-full h-auto mx-auto rounded-lg armor-glow"
              style={{ maxHeight: '500px' }}
            />
          </motion.div>
        </div>

        <div className="scroll-indicator">
          <ChevronDown 
            className="w-8 h-8 text-yellow-400 cursor-pointer"
            onClick={() => scrollToSection('constelacao')}
          />
        </div>
      </section>

      {/* Seção Nossa Constelação do Amor */}
      <section id="constelacao" className="section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold golden-text mb-6">
              Sob as Estrelas do Destino
            </h2>
            <div className="romantic-card p-8 rounded-lg max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-gray-200">
                Desde os tempos antigos, as constelações guiam os destinos dos mortais, e foi sob a luz das estrelas que nossos caminhos se cruzaram. Como dois cavaleiros destinados a lutar lado a lado, descobrimos que nossos corações batiam no mesmo ritmo cósmico, criando uma harmonia que ecoa através das dimensões.
              </p>
              <br />
              <p className="text-lg leading-relaxed text-gray-200">
                Nosso amor não é apenas terreno - é celestial, eterno, forjado nas fornalhas das estrelas e abençoado pelos deuses do Olimpo. Cada momento juntos é como despertar um novo cosmos dentro de nós, onde as leis da física se curvam diante da força do nosso sentimento.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Primeira Constelação", desc: "O momento em que nos conhecemos" },
              { icon: Heart, title: "Alinhamento Cósmico", desc: "Quando nossos corações se uniram" },
              { icon: Sparkles, title: "Energia Infinita", desc: "O poder do nosso amor eterno" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="romantic-card p-6 rounded-lg text-center"
              >
                <item.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold golden-text mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Armaduras do Coração */}
      <section id="armaduras" className="section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold golden-text mb-6">
              As Relíquias Sagradas do Nosso Amor
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={armaduraCoracao}
                alt="Armadura do Coração"
                className="w-full max-w-md mx-auto armor-glow rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                {
                  title: "A Armadura de Pégaso do Primeiro Encontro",
                  desc: "Brilhante e cheia de esperança, representa o momento mágico em que nossos olhares se encontraram pela primeira vez."
                },
                {
                  title: "A Armadura de Cisne da Primeira Declaração",
                  desc: "Elegante e pura, simboliza as palavras doces que trocamos quando finalmente confessamos nossos sentimentos."
                },
                {
                  title: "A Armadura de Dragão dos Desafios Superados",
                  desc: "Forte e resiliente, representa todos os obstáculos que enfrentamos juntos."
                }
              ].map((armor, index) => (
                <div key={index} className="romantic-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold golden-text mb-3">{armor.title}</h3>
                  <p className="text-gray-300">{armor.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Juramento dos Cavaleiros */}
      <section id="juramento" className="section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold golden-text mb-8">
              Meu Juramento Eterno
            </h2>
            
            <div className="romantic-card p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                <Shield className="w-16 h-16 text-yellow-400" />
              </div>
              
              <p className="text-lg italic text-blue-200 mb-6">
                "Sob a proteção de Atena e diante das 88 constelações que iluminam o cosmos, eu faço este juramento solene:"
              </p>
              
              <div className="space-y-4 text-gray-200">
                <p>
                  Prometo ser seu cavaleiro protetor, assim como os Santos protegem a deusa da sabedoria. 
                  Prometo que meu cosmos sempre brilhará para você, mesmo nas noites mais escuras.
                </p>
                <p>
                  Assim como os Cavaleiros de Ouro guardam as doze casas do Santuário, eu guardarei nosso amor 
                  em meu coração como o tesouro mais sagrado.
                </p>
                <p>
                  Prometo que, mesmo que as estrelas caiam do céu e as constelações se desfaçam, 
                  meu amor por você permanecerá inabalável. Você é minha Atena, minha deusa, minha razão de existir neste vasto cosmos.
                </p>
              </div>
              
              <p className="text-lg italic text-yellow-400 mt-6">
                "Por Atena e por todos os deuses do Olimpo, este é meu juramento eterno de amor."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Timeline do Amor */}
      <section id="timeline" className="section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold golden-text mb-6">
              A Cronologia Celestial do Nosso Destino
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "A Grande Explosão do Primeiro Olhar",
                desc: "Como o Big Bang que criou o universo, nosso primeiro encontro deu origem a uma nova realidade onde apenas nós dois existíamos."
              },
              {
                title: "A Formação das Primeiras Estrelas",
                desc: "Nossos primeiros encontros foram como a formação das primeiras estrelas no cosmos - cheios de energia, brilho e a promessa de algo grandioso por vir, em meio a uma nova realidade."
              },
              {
                title: "O Nascimento das Constelações",
                desc: "Quando nos tornamos um casal, foi como se as 88 constelações finalmente encontrassem suas posições definitivas no céu."
              },
              {
                title: "A Era dos Cavaleiros Dourados",
                desc: "Os momentos mais especiais do nosso relacionamento são como a era dos Cavaleiros de Ouro - épicos, poderosos e inesquecíveis."
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="romantic-card p-6 rounded-lg">
                    <h3 className="text-xl font-semibold golden-text mb-3">{event.title}</h3>
                    <p className="text-gray-300">{event.desc}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-yellow-400 rounded-full flex-shrink-0"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mensagem Final */}
      <section id="final" className="section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold golden-text mb-8">
              Para Sempre, Meu Amor Celestial
            </h2>
            
            <div className="romantic-card p-8 rounded-lg">
              <p className="text-lg leading-relaxed text-gray-200 mb-6">
                Neste Dia dos Namorados, quero que você saiba que você é mais que minha namorada - 
                você é minha companheira de cosmos, minha parceira de batalha contra a solidão, 
                minha deusa pessoal que merece toda a proteção e devoção que um cavaleiro pode oferecer.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-200 mb-8">
                Que nosso amor continue brilhando como a constelação mais bela do céu noturno, 
                guiando outros corações perdidos em direção à felicidade. Que possamos sempre encontrar força um no outro, 
                assim como os Cavaleiros encontram força em sua fé e determinação.
              </p>
              
              <div className="space-y-4">
                <p className="text-lg italic text-blue-200">
                  Com todo o amor do meu cosmos,
                </p>
                <p className="text-xl font-semibold golden-text">
                  Seu Cavaleiro Eterno
                </p>
              </div>
              
              <div className="mt-8 p-4 border border-yellow-400 rounded-lg">
                <p className="text-lg font-semibold text-yellow-400">
                  "Nosso amor é eterno como as estrelas, poderoso como o cosmos e sagrado como as armaduras dos deuses."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-yellow-400/30">
        <div className="flex justify-center space-x-4 mb-4">
          <Heart className="w-6 h-6 text-red-400" />
          <Star className="w-6 h-6 text-yellow-400" />
          <Heart className="w-6 h-6 text-red-400" />
        </div>
        <p className="text-gray-400">
          Feito com amor cósmico • Dia dos Namorados 2025
        </p>
      </footer>
    </div>
  );
}

export default App;

