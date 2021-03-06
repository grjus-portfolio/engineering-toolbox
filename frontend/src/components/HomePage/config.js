import fatigueLogo from './img/fatigue.png';
import stressCorrectionLogo from './img/stress_correction.png';
import compositeLogo from './img/composite.png';

export const titleCardDescription = 'Welcome to Engineering Toolbox. Purpose of this Website is to provide easy to use engineering tools which can be used in daily work. At this moment two engineering applications are provided: Fatigue Toolbox and Nauber Toolbox. In upcoming weeks Composite Toolbox will be provided.  In case of any queries please use contact form.This web page is not yet optimized for mobile devices ';

export const smallCardItems = [
  {
    image: fatigueLogo,
    title: 'Fatigue Toolbox',
    description: 'Evaluate fatigue damage using Baskin fatigue model and generate report.',
    disabled: false,
    path: '/fatigue',
  },
  {
    image: stressCorrectionLogo,
    title: 'Stress correction App',
    description: 'Evaluate plastic stress value at notch using Ramberg-Osgood curve and Neuber/Glinka rule',
    disabled: false,
    path: '/stress-correction',
  },
  {
    image: compositeLogo,
    title: 'Composite Toolbox',
    description: 'Calculate stress and straing for laminated plates and cylinders. Comming soon...',
    disabled: false,
    path: '/composites',
  },
];
