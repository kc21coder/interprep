import { useState } from 'react';
import {General} from './General';
import {Javascript} from './Javascript';
import {React} from './React';
import {Vue} from './Vue';
import {CSS} from './CSS';
import {Architecture} from './Architecture';
import {DesignPatterns} from './DesignPatterns';
import {Docker} from './Docker';
import {CICD} from './CICD';
import {Agile} from './Agile';
import {SDLC} from './SDLC';
import {Thanks} from './Thanks';

function Main() {
  const [currentComponent, setCurrentComponent] = useState('General');

  const renderComponent = () => {
    switch (currentComponent) {
      case 'General':
        return <General />;
      case 'Javascript':
        return <Javascript />;
      case 'React':
        return <React />;
      case 'Vue':
        return <Vue />;
      case 'CSS':
        return <CSS />;
      case 'Architecture':
        return <Architecture />;
      case 'DesignPatterns':
        return <DesignPatterns />;
      case 'Docker':
        return <Docker />;
      case 'CICD':
        return <CICD />;
      case 'Agile':
        return <Agile />;
      case 'SDLC':
        return <SDLC />;
        case 'Thanks':
            return <Thanks />;
      default:
        return <div>No component found</div>;
    }
  };

  return (
    <div>
      <h1>Interview Q&A</h1>
      <div>
        <button onClick={() => setCurrentComponent('General')}>General</button>
        <button onClick={() => setCurrentComponent('Javascript')}>Javascript</button>
        <button onClick={() => setCurrentComponent('React')}>React</button>
        <button onClick={() => setCurrentComponent('Vue')}>Vue</button>
        <button onClick={() => setCurrentComponent('CSS')}>CSS</button>
        <button onClick={() => setCurrentComponent('Architecture')}>Architecture</button>
        <button onClick={() => setCurrentComponent('DesignPatterns')}>Design Patterns</button>
        <button onClick={() => setCurrentComponent('Docker')}>Docker</button>
        <button onClick={() => setCurrentComponent('CICD')}>CICD</button>
        <button onClick={() => setCurrentComponent('Agile')}>Agile</button>
        <button onClick={() => setCurrentComponent('SDLC')}>SDLC</button>
        <button onClick={() => setCurrentComponent('Thanks')}>Thankiu</button>
    
      </div>
      {renderComponent()}
    </div>
  );
}

export default Main;