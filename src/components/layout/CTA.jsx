// Componente CTA: Llamada a la Acción
// Sección destacada con título, descripción y 2 botones
// Soporta diferentes fondos: gradient, primary, secondary

import Button from '../ui/Button';
import Heading from '../ui/Heading';

const CTA = ({ title, description, buttonText = 'Comenzar ahora', background = 'gradient' }) => {
  const backgrounds = {
    gradient: 'bg-gradient-to-r from-primary via-secondary to-accent',
    primary: 'bg-primary dark:bg-primary-dark',
    secondary: 'bg-secondary dark:bg-secondary-dark',
  };

  return (
    <div className={`rounded-2xl ${backgrounds[background]} p-8 md:p-12 text-center text-white shadow-2xl`}>
      <Heading level={2} className="text-white mb-4">
        {title}
      </Heading>
      
      <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          variant="outline" 
          size="lg"
          className="bg-white text-primary hover:bg-neutral-100 border-0"
        >
          {buttonText}
        </Button>
        <Button 
          size="lg"
          className="bg-white/20 hover:bg-white/30 border-2 border-white text-white"
        >
          Hablar con un experto
        </Button>
      </div>
    </div>
  );
};

export default CTA;
