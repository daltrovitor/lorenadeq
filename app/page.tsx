import React from "react";
import FaqAccordion from "./FaqAccordion";

export default function Home() {

  const checkoutUrl = "https://pay.hotmart.com/C56596063W?checkoutMode=10";

  const faqs = [
    {
      q: "Por quanto tempo terei acesso ao conteúdo?",
      a: "O acesso é por 1 ano a partir da data da compra. Você pode assistir às videoaulas quantas vezes quiser durante esse período e baixar os PDFs bônus para guardar permanentemente."
    },
    {
      q: "Consigo acessar pelo celular?",
      a: "Sim. O conteúdo fica disponível na área de membros da Hotmart, que tem aplicativo para iOS e Android. Você acessa pelo celular, tablet ou computador, onde for mais prático."
    },
    {
      q: "Posso comprar durante a gravidez e usar depois do parto?",
      a: "Exatamente como o Método Domine foi pensado para funcionar. Você assiste durante a gestação para chegar preparada, e depois revisita as aulas específicas quando surgir qualquer dúvida no puerpério."
    },
    {
      q: "O conteúdo serve para quem está tendo dificuldade agora?",
      a: "Sim. As aulas foram organizadas para funcionar tanto como preparo antes do parto quanto como protocolo de consulta durante o puerpério. Se você está enfrentando fissura, ingurgitamento ou insegurança sobre leite suficiente, há uma aula específica para cada situação."
    },
    {
      q: "E se eu não conseguir amamentar mesmo com o curso?",
      a: "O conteúdo aumenta muito a probabilidade de sucesso porque a maioria das dificuldades tem causa técnica e tem protocolo. Mas se após 7 dias você sentir que o conteúdo não está ajudando, a garantia cobre 100% do reembolso, sem burocracia."
    },
    {
      q: "Como funciona a garantia de 7 dias?",
      a: "Se em 7 dias a partir da compra você não estiver satisfeita, basta acessar a plataforma Hotmart e solicitar o reembolso. O processo é simples, automatizado e sem necessidade de justificativa. O valor é devolvido integralmente."
    },
    {
      q: "O curso ensina sobre mastite? Posso amamentar enquanto estou com mastite?",
      a: "Sim, há uma aula dedicada às intercorrências, que explica sobre a mastite com perfeição: o que é, como identificar, como evitar, quando amamentar ou não amamentar, e quando procurar atendimento médico."
    },
    {
      q: "Tenho uma filha de 2 meses com dificuldade na pega. Ainda dá para corrigir?",
      a: "Sim. A pega pode ser corrigida em qualquer fase da amamentação. O processo pode levar alguns dias de ajuste, mas é ensinável. O conteúdo explica como avaliar e corrigir o posicionamento passo a passo."
    },
    {
      q: "A plataforma é segura para pagamento?",
      a: "Sim. O pagamento é processado pela Hotmart, uma das maiores plataformas de infoprodutos do Brasil, com criptografia de dados e opções de pagamento via cartão, boleto e Pix."
    },
    {
      q: "Posso baixar as videoaulas para assistir sem internet?",
      a: "O aplicativo da Hotmart permite download das aulas para assistir offline. Os PDFs bônus podem ser baixados e salvos no celular ou computador sem necessidade de conexão posterior."
    }
  ];

  const modules = [
    { num: 1, title: "Preparação para o nascimento", icon: "calendar" },
    { num: 2, title: "Primeira mamada", icon: "baby" },
    { num: 3, title: "Pega correta", icon: "heart" },
    { num: 4, title: "Posicionamentos", icon: "users" },
    { num: 5, title: "Sinais do bebê", icon: "smile" },
    { num: 6, title: "Fissuras e rachaduras", icon: "droplet" },
    { num: 7, title: "Ingurgitamento", icon: "stethoscope" },
    { num: 8, title: "Mastite", icon: "shield" },
    { num: 9, title: "Ordenha", icon: "droplets" },
    { num: 10, title: "Desmame", icon: "heart" }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "calendar":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
        );
      case "baby":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path>
            <path d="M15 12h.01"></path>
            <path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path>
            <path d="M9 12h.01"></path>
          </svg>
        );
      case "users":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <circle cx="9" cy="7" r="4"></circle>
          </svg>
        );
      case "smile":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" x2="9.01" y1="9" y2="9"></line>
            <line x1="15" x2="15.01" y1="9" y2="9"></line>
          </svg>
        );
      case "droplet":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
          </svg>
        );
      case "stethoscope":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M11 2v2"></path>
            <path d="M5 2v2"></path>
            <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
            <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
            <circle cx="20" cy="10" r="2"></circle>
          </svg>
        );
      case "shield":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
          </svg>
        );
      case "droplets":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
            <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
          </svg>
        );
      case "heart":
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
          </svg>
        );
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Top Banner Section with foto1.webp background */}
      <section 
        className="relative w-full aspect-[16/9] md:h-[450px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('/foto1.webp')" }}
      >
        {/* Soft gradient overlay to brighten the image while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.25_0.04_20)]/45 via-[oklch(0.25_0.04_20)]/20 to-transparent z-0"></div>
        
        {/* Logo container (centered within the left 50% "white part" of the image) */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-12 lg:px-16 h-full flex items-center justify-start">
          <div className="w-[50%] sm:w-[45%] flex flex-col items-center justify-center text-center">
            <img 
              src="/logo-branco.webp" 
              alt="Domine a Amamentação" 
              className="h-28 sm:h-44 md:h-64 w-auto" 
              width={270} 
              height={270} 
            />
          </div>
        </div>
      </section>

      {/* Hero Content Section with dark burgundy gradient background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.45_0.12_15)] via-[oklch(0.55_0.15_12)] to-[oklch(0.65_0.14_20)] text-white py-16 md:py-24">
        {/* Decorative background overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" 
          style={{
            backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.9 0.08 25) 0%, transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.7 0.15 10) 0%, transparent 50%)"
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="inline-block font-script text-md sm:text-xl md:text-3xl text-[oklch(0.95_0.05_25)] text-center leading-relaxed px-6 py-2.5 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xs shadow-sm mb-6">
            Para mães que querem viver essa fase com leveza
          </p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] font-medium mb-8 text-white">
            Construa uma relação tranquila com seu bebê desde os primeiros dias,{" "}
            <span className="mt-2 font-serif text-white block md:inline">
              amamentando com confiança e sem dor
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-6 max-w-2xl mx-auto">
            A maioria das mães chega ao parto sem saber o que esperar das primeiras mamadas. Dias de dor, noites de pouco sono e aquela sensação de culpa de quem acha que está falhando.
          </p>

          <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            A boa notícia é que a maioria dessas dificuldades podem ser evitadas com conhecimento adquirido do jeito certo!
          </p>

          <p className="text-base md:text-lg text-white font-medium mb-6 max-w-2xl mx-auto">
            Com o aprendizado do Domine a Amamentação, você vai conseguir:
          </p>

          <div className="text-left max-w-2xl mx-auto mb-10 space-y-4">
            <div className="flex gap-3 items-start">
              <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </div>
              <p className="text-white/95 text-sm md:text-base">
                Sentir confiança para amamentar, sabendo o que é normal e o que precisa de atenção desde os primeiros dias, ainda na maternidade.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </div>
              <p className="text-white/95 text-sm md:text-base">
                Reduzir o choro por dificuldades na mamada - causada pela pega incorreta - e atravessar os primeiros dias sem as dores que fazem tantas mães desistirem do seu grande sonho.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </div>
              <p className="text-white/95 text-sm md:text-base">
                Construir uma relação tranquila e harmoniosa com seu bebê, guardando memórias afetivas positivas dessa fase tão especial.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <a 
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[oklch(0.52_0.17_15)] text-white font-semibold uppercase tracking-wider shadow-[0_10px_30px_-10px_oklch(0.58_0.16_10/0.5)] hover:bg-[oklch(0.47_0.17_15)] hover:-translate-y-0.5 transition-all px-10 py-5 text-sm md:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 fill-current text-white" aria-hidden="true">
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
              </svg>
               QUERO APRENDER A AMAMENTAR
            </a>
          </div>

          <p className="text-xs uppercase tracking-widest text-white/70 inline-flex items-center justify-center gap-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1">
              COMPRA SEGURA{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white" aria-hidden="true">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </span>
            <span>·</span>
            <span>ACESSO POR 1 ANO</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              7 DIAS DE GARANTIA{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-script text-2xl text-primary mb-2">A diferença está no preparo</p>
            <h2 className="font-serif text-3xl md:text-5xl mb-5 text-foreground">O que muda quando você chega preparada</h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              A amamentação que você imaginou é possível, sim! <br className="hidden md:block" />
              O que separa uma experiência tranquila de outra frustrante e exaustiva, na maioria dos casos, é ter as informações certas no momento certo - antes do parto.
              <br /><br />
              E o melhor ainda: podendo relembrar o que for preciso, de forma prática e clara, sempre que houver qualquer dúvida ou insegurança.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-sm">
            <div className="hidden md:grid grid-cols-[1.2fr_1.4fr_1.4fr] bg-secondary text-secondary-foreground font-serif text-lg">
              <div className="p-5">Situação</div>
              <div className="p-5 bg-primary/10 text-[oklch(0.4_0.12_15)] font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 fill-[oklch(0.4_0.12_15)] text-[oklch(0.4_0.12_15)]" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
                Com Domine a Amamentação
              </div>
              <div className="p-5">Sem o protocolo</div>
            </div>

            {/* Row 1 */}
            <div className="grid md:grid-cols-[1.2fr_1.4fr_1.4fr] border-t border-border bg-card">
              <div className="p-5 font-serif text-lg md:text-base md:font-semibold text-foreground">Primeira mamada após o nascimento</div>
              <div className="p-5 bg-primary/5 flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="md:hidden text-[10px] font-semibold text-[oklch(0.4_0.12_15)] uppercase tracking-wider mb-1">Com Domine a Amamentação</span>
                  <span className="text-sm leading-relaxed">Chega sabendo o que fazer e coloca em prática desde a primeira vez</span>
                </div>
              </div>
              <div className="p-5 flex gap-3 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="md:hidden text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Sem o protocolo</span>
                  <span className="text-sm leading-relaxed">Espera alguém ter tempo para ensinar na correria da maternidade</span>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-[1.2fr_1.4fr_1.4fr] border-t border-border bg-muted/40">
              <div className="p-5 font-serif text-lg md:text-base md:font-semibold text-foreground">Dor e fissuras nos mamilos</div>
              <div className="p-5 bg-primary/5 flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="md:hidden text-[10px] font-semibold text-[oklch(0.4_0.12_15)] uppercase tracking-wider mb-1">Com Domine a Amamentação</span>
                  <span className="text-sm leading-relaxed">Identifica a causa, corrige a pega e sabe o que deve (ou não!) aplicar</span>
                </div>
              </div>
              <div className="p-5 flex gap-3 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="md:hidden text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Sem o protocolo</span>
                  <span className="text-sm leading-relaxed">Aguenta a dor contando os segundos para a mamada terminar (ou pensando em desistir a qualquer momento).</span>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-[1.2fr_1.4fr_1.4fr] border-t border-border bg-card">
              <div className="p-5 font-serif text-lg md:text-base md:font-semibold text-foreground">Peito empedrado de madrugada</div>
              <div className="p-5 bg-primary/5 flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="md:hidden text-[10px] font-semibold text-[oklch(0.4_0.12_15)] uppercase tracking-wider mb-1">Com Domine a Amamentação</span>
                  <span className="text-sm leading-relaxed">Segue o protocolo em casa e resolve em minutos</span>
                </div>
              </div>
              <div className="p-5 flex gap-3 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="md:hidden text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Sem o protocolo</span>
                  <span className="text-sm leading-relaxed">Acorda todo mundo ou corre ao pronto-socorro às 3h</span>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid md:grid-cols-[1.2fr_1.4fr_1.4fr] border-t border-border bg-muted/40">
              <div className="p-5 font-serif text-lg md:text-base md:font-semibold text-foreground">Mastite</div>
              <div className="p-5 bg-primary/5 flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="md:hidden text-[10px] font-semibold text-[oklch(0.4_0.12_15)] uppercase tracking-wider mb-1">Com Domine a Amamentação</span>
                  <span className="text-sm leading-relaxed">Sabe o que fazer e continua amamentando com segurança</span>
                </div>
              </div>
              <div className="p-5 flex gap-3 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="md:hidden text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Sem o protocolo</span>
                  <span className="text-sm leading-relaxed">Para de amamentar por medo, muitas vezes sem necessidade</span>
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid md:grid-cols-[1.2fr_1.4fr_1.4fr] border-t border-border bg-card">
              <div className="p-5 font-serif text-lg md:text-base md:font-semibold text-foreground">Bebê chorando após mamar</div>
              <div className="p-5 bg-primary/5 flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="md:hidden text-[10px] font-semibold text-[oklch(0.4_0.12_15)] uppercase tracking-wider mb-1">Com Domine a Amamentação</span>
                  <span className="text-sm leading-relaxed">Lê os sinais e entende o que está acontecendo de verdade</span>
                </div>
              </div>
              <div className="p-5 flex gap-3 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="md:hidden text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Sem o protocolo</span>
                  <span className="text-sm leading-relaxed">Interpreta como leite fraco e complementa com fórmula</span>
                </div>
              </div>
            </div>

            {/* Row 6 */}
            <div className="grid md:grid-cols-[1.2fr_1.4fr_1.4fr] border-t border-border bg-muted/40">
              <div className="p-5 font-serif text-lg md:text-base md:font-semibold text-foreground">Medo de leite insuficiente</div>
              <div className="p-5 bg-primary/5 flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="md:hidden text-[10px] font-semibold text-[oklch(0.4_0.12_15)] uppercase tracking-wider mb-1">Com Domine a Amamentação</span>
                  <span className="text-sm leading-relaxed">Sabe interpretar os sinais de saciedade e hidratação do bebê</span>
                </div>
              </div>
              <div className="p-5 flex gap-3 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="md:hidden text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Sem o protocolo</span>
                  <span className="text-sm leading-relaxed">Vive em dúvida se o bebê está cheio ou se precisa mamar mais</span>
                </div>
              </div>
            </div>

            {/* Row 7 */}
            <div className="grid md:grid-cols-[1.2fr_1.4fr_1.4fr] border-t border-border bg-card">
              <div className="p-5 font-serif text-lg md:text-base md:font-semibold text-foreground">Noites sem dormir e cansaço extremo</div>
              <div className="p-5 bg-primary/5 flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="md:hidden text-[10px] font-semibold text-[oklch(0.4_0.12_15)] uppercase tracking-wider mb-1">Com Domine a Amamentação</span>
                  <span className="text-sm leading-relaxed">Dorme confiante e em paz, sabendo que o bebê está bem alimentado</span>
                </div>
              </div>
              <div className="p-5 flex gap-3 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="md:hidden text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Sem o protocolo</span>
                  <span className="text-sm leading-relaxed">Vira noites e noites em claro, dando o peito toda vez que o bebê chora</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-28 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-20">
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 md:w-14 md:h-14">
                  <path d="M11 2v2"></path>
                  <path d="M5 2v2"></path>
                  <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                  <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                  <circle cx="20" cy="10" r="2"></circle>
                </svg>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                Um método criado para acompanhar você <span className="text-primary italic">desde a gestação</span>
              </h2>
            </div>
            
            <div className="md:border-l text-center md:border-primary/30 md:pl-10 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Diferente dos conteúdos genéricos encontrados na internet, o <strong className="text-foreground font-semibold">Domine a Amamentação</strong> foi desenvolvido por médica pediatra para funcionar como um verdadeiro apoio, como se tivesse a especialista ao seu lado o tempo todo.
              </p>
              <p>
                Você aprende antes do nascimento e revisita o conteúdo sempre que surgir uma dúvida ou qualquer dificuldade.
              </p>
            </div>
          </div>

          <div className="text-center mb-3">
            <h3 className="font-serif text-3xl md:text-5xl text-foreground">
              3 passos para amamentar com <span className="text-primary italic">confiança e sem dor</span>
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary fill-primary mx-auto mt-3" aria-hidden="true">
              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
            </svg>
          </div>

          {/* Steps */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-4 items-stretch relative">
            
            {/* Step 1 */}
            <div className="relative flex-1">
              <div className="bg-card border border-primary/15 rounded-2xl p-8 text-center shadow-[0_8px_30px_-12px_oklch(0.58_0.16_10/0.15)] h-full flex flex-col items-center justify-between">
                <div className="flex items-center justify-center mb-4 h-24">
                  <img src="/icon-preparar.webp" alt="PREPARAR" className="h-24 w-auto object-contain" width={114} height={96} />
                </div>
                <div>
                  <h4 className="font-serif text-xl md:text-2xl font-bold tracking-wide mb-3 flex items-baseline justify-center gap-2">
                    <span className="text-primary">01</span><span>PREPARAR</span>
                  </h4>
                  <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                    Assista às aulas durante a gestação e chegue ao parto sabendo exatamente como conduzir a primeira mamada.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/3 -right-14 -translate-y-1/2 w-28 h-auto z-10 pointer-events-none">
                <img src="/arrow-curva.webp" alt="" aria-hidden="true" className="w-24 h-auto" width={96} height={64} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex-1">
              <div className="bg-card border border-primary/15 rounded-2xl p-8 text-center shadow-[0_8px_30px_-12px_oklch(0.58_0.16_10/0.15)] h-full flex flex-col items-center justify-between">
                <div className="flex items-center justify-center mb-4 h-24">
                  <img src="/icon-aplicar.webp" alt="APLICAR" className="h-24 w-auto object-contain" width={102} height={96} />
                </div>
                <div>
                  <h4 className="font-serif text-xl md:text-2xl font-bold tracking-wide mb-3 flex items-baseline justify-center gap-2">
                    <span className="text-primary">02</span><span>APLICAR</span>
                  </h4>
                  <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                    Aprenda a pega correta, posicionamento e interpretação dos sinais do bebê desde as primeiras horas de vida.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/3 -right-14 -translate-y-1/2 w-28 h-auto z-10 pointer-events-none">
                <img src="/arrow-curva.webp" alt="" aria-hidden="true" className="w-24 h-auto" width={96} height={64} />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex-1">
              <div className="bg-card border border-primary/15 rounded-2xl p-8 text-center shadow-[0_8px_30px_-12px_oklch(0.58_0.16_10/0.15)] h-full flex flex-col items-center justify-between">
                <div className="flex items-center justify-center mb-4 h-24">
                  <img src="/icon-sustentar.webp" alt="SUSTENTAR" className="h-24 w-auto object-contain" width={144} height={96} />
                </div>
                <div>
                  <h4 className="font-serif text-xl md:text-2xl font-bold tracking-wide mb-3 flex items-baseline justify-center gap-2">
                    <span className="text-primary">03</span><span>SUSTENTAR</span>
                  </h4>
                  <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                    Tenha acesso rápido às orientações necessárias para resolver os desafios mais comuns da amamentação.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Curriculum Modules Grid */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">
              O que você vai <span className="text-primary italic">aprender</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 min-[340px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {modules.map((m) => (
              <div key={m.num} className="group bg-card border border-primary/15 rounded-2xl p-4 sm:p-5 hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    {getIcon(m.icon)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground mb-1">
                      Módulo {m.num}
                    </div>
                    <p className="font-serif text-xs min-[340px]:text-sm md:text-base leading-tight font-semibold text-foreground break-words">
                      {m.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section: Doctor Photo (foto2.jpeg) and Bio */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16 items-center">
          
          {/* Doctor portrait image (foto2.jpeg) */}
          <div className="relative max-w-sm mx-auto md:max-w-none w-full">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-[-3deg]"></div>
            <img 
              src="/foto2.webp" 
              alt="Dra. Lorena Caramaschi" 
              className="relative rounded-3xl w-full h-auto object-cover shadow-xl border border-primary/5"
              width={853}
              height={1280}
            />
          </div>

          <div>
            <p className="font-script text-2xl text-primary mb-2">Quem irá te acompanhar</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-2 text-foreground">Dra. Lorena Caramaschi</h2>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">
              MÉDICA PEDIATRA  
            </p>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-8">
              CRM/GO 20.882 - RQE 12.917
            </p>
            
            <div className="space-y-5 text-foreground/85 text-sm md:text-base leading-relaxed">
              <p>
                Me formei em medicina em 2016 e há 7 anos cuido de crianças e das suas famílias na Pediatria. 
                <br /><br />
                Sou mãe de dois, vivi na pele os desafios da amamentação e posso te ajudar de duas formas: como mãe que também já passou por isso e como médica pediatra que já ajudou centenas de mães a superarem as dificuldades dessa fase, vivendo uma maternidade mais leve e segura.
              </p>
              
              <p>
                No consultório, eu via um padrão que se repetia toda semana. 
                <br /><br />
                Mães chegavam no olho do furacão: primeiros dias após o parto e absolutamente perdidas, exaustas, emocionalmente esgotadas, cheias de dúvidas que ninguém havia explicado direito. 
                <br /><br />
                Saíam da maternidade com um bebê no colo, sem saber o que fazer e com uma lista de perguntas que precisavam descobrir sozinhas, na maioria das vezes no meio da madrugada, com muito choro no pé do ouvido.
              </p>

              <p>
                O Domine a Amamentação nasceu dessa observação. Quero que você chegue ao parto tranquila, sabendo o que fazer e como fazer, sem depender de alguém na correria da maternidade para te ensinar a pega com calma (ou muitas vezes, infelizmente, mais atrapalhar do que ajudar).
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing / Checkout Offer Section */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-[oklch(0.45_0.12_15)] to-[oklch(0.6_0.15_15)] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-script text-2xl text-[oklch(0.95_0.06_25)] mb-3">A Oportunidade Completa</p>
          <h2 className="font-serif text-3xl md:text-5xl mb-5">
            Amamentar com confiança e sem dor desde os primeiros dias
          </h2>
          <p className="text-white/80 mb-12 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Tudo o que você precisa para atravessar as primeiras semanas de amamentação com orientação médica detalhada e linguagem clara, didática e acolhedora.
            <br /><br />
            O melhor que você pode fazer pelo seu bebê agora é chegar preparada.
          </p>

          <div className="bg-white/95 text-foreground rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="space-y-4 text-left mb-6">
              <div className="flex justify-between gap-4 pb-4 border-b border-border last:border-0">
                <span className="flex gap-3 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="font-serif text-base md:text-lg text-foreground">Domine a Amamentação (11 videoaulas)</span>
                </span>
                <span className="font-semibold text-muted-foreground whitespace-nowrap">R$ 247</span>
              </div>

              <div className="flex justify-between gap-4 pb-4 border-b border-border last:border-0">
                <span className="flex gap-3 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="font-serif text-base md:text-lg text-foreground">Bônus: Ordenha (PDF)</span>
                </span>
                <span className="font-semibold text-muted-foreground whitespace-nowrap">R$ 49</span>
              </div>

              <div className="flex justify-between gap-4 pb-4 border-b border-border last:border-0">
                <span className="flex gap-3 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="font-serif text-base md:text-lg text-foreground">Bônus: A mãe que amamenta (PDF)</span>
                </span>
                <span className="font-semibold text-muted-foreground whitespace-nowrap">R$ 39</span>
              </div>

              <div className="flex justify-between gap-4 pb-4 border-b border-border last:border-0">
                <span className="flex gap-3 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="font-serif text-base md:text-lg text-foreground">Bônus: Desmame (PDF)</span>
                </span>
                <span className="font-semibold text-muted-foreground whitespace-nowrap">R$ 49</span>
              </div>

              <div className="flex justify-between pt-2">
                <span className="text-muted-foreground text-sm">Total dos itens</span>
                <span className="line-through text-muted-foreground text-sm">R$ 384</span>
              </div>
            </div>

            <div className="text-center py-6 border-y border-border my-6">
              <p className="text-muted-foreground text-sm mb-1">De R$ 384 por apenas</p>
              <p className="font-serif text-5xl md:text-7xl text-primary font-bold">
                R$ 97
                <span className="text-base md:text-lg font-sans font-normal text-muted-foreground ml-2">
                  à vista
                </span>
              </p>
              <p className="text-xs text-muted-foreground mt-2">ou em até 12 x de R$ 10,03</p>
            </div>

            <div className="mb-4">
              <a 
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-[oklch(0.52_0.17_15)] text-white font-semibold uppercase tracking-wider shadow-[0_10px_30px_-10px_oklch(0.58_0.16_10/0.5)] hover:bg-[oklch(0.47_0.17_15)] hover:-translate-y-0.5 transition-all px-10 py-5 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 fill-current text-white" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
                 QUERO OBTER ESSA OFERTA
              </a>
            </div>

            <p className="text-xs uppercase tracking-widest text-muted-foreground inline-flex items-center justify-center gap-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1">
                COMPRA SEGURA{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </span>
              <span>·</span>
              <span>ACESSO POR 1 ANO</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                7 DIAS DE GARANTIA{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Card Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12 text-center shadow-sm">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <p className="font-script text-2xl text-primary mb-2">Sem risco para você!</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-3 text-foreground">Garantia incondicional de 7 dias</h2>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-xl mx-auto">
            O conteúdo do Domine a Amamentação aumenta MUITO a sua probabilidade de sucesso porque a maioria das dificuldades tem causa técnica e são totalmente evitáveis com conhecimento e informação de qualidade.
            <br /><br />
            Mas se nos primeiros 7 dias você sentir que o conteúdo não está ajudando, a garantia cobre reembolso de 100% do investimento, sem burocracia.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 md:py-28 px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-script text-2xl text-primary mb-2">Tire suas dúvidas</p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">Dúvidas antes de decidir</h2>
          </div>

          <FaqAccordion faqs={faqs} />

          <div className="text-center mt-14">
            <a 
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[oklch(0.52_0.17_15)] text-white font-semibold uppercase tracking-wider shadow-[0_10px_30px_-10px_oklch(0.58_0.16_10/0.5)] hover:bg-[oklch(0.47_0.17_15)] hover:-translate-y-0.5 transition-all px-10 py-5 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 fill-current text-white" aria-hidden="true">
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
              </svg>
               QUERO APRENDER A AMAMENTAR
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-br from-[oklch(0.45_0.12_15)] via-[oklch(0.55_0.15_12)] to-[oklch(0.65_0.14_20)] text-white/90 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <img src="/logo-branco.webp" alt="Domine a Amamentação" className="h-20 w-auto opacity-90" width={80} height={80} />
          
          <div className="text-center md:text-right text-sm">
            <p className="text-white font-serif text-lg mb-1">Dra. Lorena Caramaschi</p>
            <p className="text-xs tracking-wider">MÉDICA PEDIATRA · CRM/GO 20.882 - RQE 12.917</p>
            <p className="mt-3 text-xs opacity-70">
              © {new Date().getFullYear()} Domine a Amamentação. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
