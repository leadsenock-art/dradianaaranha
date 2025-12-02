import { 
  Smile, Zap, Crown, Sparkles, UserCheck, HeartPulse, 
  Syringe, Bone, Layers, Baby, Activity, Scan
} from 'lucide-react';
import { NavItem, Specialty, Testimonial, BeforeAfterItem, ContactInfo, AboutContent } from './types';

// =====================================================================
// REAL CONTENT - DRA. DIANA ARANHA
// =====================================================================

export const SITE_NAME = "Dra. Diana Aranha";
export const HERO_TITLE = "Revele o poder do seu sorriso";
export const HERO_SUBTITLE = "Com confiança, experiência e conforto que podemos te proporcionar.";
export const CTA_BUTTON = "Agendar Consulta";
export const WHATSAPP_CTA = "Fale pelo WhatsApp";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Quem Somos', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Antes e Depois', href: '#antes-depois' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Localização', href: '#contato' },
];

export const SPECIALTIES: Specialty[] = [
  {
    title: "Implante Dentário",
    description: "Todas as técnicas de reabilitação oral.",
    icon: Crown
  },
  {
    title: "Prótese Dentária",
    description: "Fixa ou removível, total ou parcial.",
    icon: Layers
  },
  {
    title: "Prótese Protocolo",
    description: "Prótese fixa sobre implantes.",
    icon: Layers
  },
  {
    title: "Lentes de Contato Dental",
    description: "Facetas ultrafinas de porcelana.",
    icon: Sparkles
  },
  {
    title: "Ortodontia",
    description: "Aparelhos fixos ou alinhadores transparentes, personalizados.",
    icon: Smile
  },
  {
    title: "Endodontia",
    description: "Tratamento de canal.",
    icon: HeartPulse
  },
  {
    title: "Sedação Consciente",
    description: "Com óxido nitroso (N₂O) para conforto do paciente durante procedimentos.",
    icon: Syringe
  },
  {
    title: "Clareamento Dental a Laser",
    description: "Técnica avançada para um sorriso mais branco.",
    icon: Zap
  },
  {
    title: "Cirurgia Bucomaxilofacial",
    description: "Extrações complexas, correções ósseas, implantes, reconstruções.",
    icon: Bone
  },
  {
    title: "Periodontia",
    description: "Tratamento das gengivas e suporte ósseo.",
    icon: Activity
  },
  {
    title: "Pacientes Especiais",
    description: "Atendimento adaptado e cuidado individualizado.",
    icon: UserCheck
  },
  {
    title: "Odontopediatria",
    description: "Saúde bucal infantil, tratamento e prevenção para crianças.",
    icon: Baby
  },
  {
    title: "Cirurgia Guiada",
    description: "Uso de tecnologia 3D para planejamento e execução precisa.",
    icon: Scan
  },
];

export const ABOUT_TEXT: AboutContent = {
  title: "Referência em Odontologia Especializada",
  description: "Com mais de 13 anos de experiência, a Clínica Dra. Diana Aranha é referência em atendimento humanizado e especializado. Nossa equipe é formada por especialistas altamente qualificados, liderada pela Dra. Diana Aranha, Mestre em Endodontia e especialista no atendimento a pacientes com necessidades especiais.",
  details: [
    "Ambiente climatizado",
    "Equipamentos de última geração",
    "Radiografia digital e pantográfica",
    "Câmera intra-oral",
    "Sedação consciente com óxido nitroso",
    "Centro de esterilização com autoclave e cuba ultrassônica",
    "Recepção com espaço kids (iPad, brinquedos)",
    "Espaço de espera com Wi-Fi, café/chá"
  ],
  mission: "Transformar vidas por meio de sorrisos mais bonitos e saudáveis, promovendo saúde bucal completa, de forma especializada e com excelência.",
  vision: "Ser referência em odontologia avançada na região de Feira de Santana e Salvador, com constante capacitação e uso de tecnologia de qualidade.",
  values: "Profissionalismo, comprometimento, dedicação, excelência."
};

// Updated with dental-relevant stock images to simulate the gallery
export const BEFORE_AFTER: BeforeAfterItem[] = [
  {
    title: "Lentes de Contato",
    description: "Harmonização e estética do sorriso.",
    imageBefore: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&auto=format&fit=crop", 
    imageAfter: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Implante Dentário",
    description: "Recuperação completa da função.",
    imageBefore: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Clareamento",
    description: "Sorriso radiante e rejuvenescido.",
    imageBefore: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=400&auto=format&fit=crop",
  }
];

// Placeholder testimonials based on "O que os pacientes dizem" section requirement
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana Silva",
    text: "O atendimento humanizado fez toda a diferença. Tenho pavor de dentista, mas a sedação com óxido nitroso me deixou super tranquila. Recomendo!",
    role: "Paciente"
  },
  {
    name: "Carlos Eduardo",
    text: "Fiz meus implantes com a Dra. Diana e a equipe. A estrutura da clínica é impressionante e o resultado ficou perfeito.",
    role: "Paciente"
  },
  {
    name: "Fernanda Lima",
    text: "Levei meu filho para a odontopediatria e ele adorou o espaço kids. Profissionais muito atenciosos e competentes.",
    role: "Mãe de Paciente"
  }
];

export const CONTACT_INFO: ContactInfo = {
  address: "Ed. Premier Feira — Av. Getúlio Vargas, 2525 – Santa Mônica, Sala 206, 2º Andar, Feira de Santana – BA, CEP 44077-015",
  phone: "(75) 3024-6947",
  whatsapp: "(75) 98140-7507", // Corrected WhatsApp number
  email: "contato@dianaaranha.com.br", 
  cro: "CRO 8609 BA",
  instagram: "@dradianaaranha" 
};

export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.0494396568856!2d-38.9566946!3d-12.2449446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71439dbd086208b%3A0x6331006570222880!2sEdif%C3%ADcio%20Premier%20Feira!5e0!3m2!1sen!2sbr!4v1716380000000!5m2!1sen!2sbr";