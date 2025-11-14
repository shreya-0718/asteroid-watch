import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Asteroid from './Asteroid';

export default function AsteroidPortal({ diameter, hazard, slideIndex }) {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    const el = document.getElementById('asteroid-slot');
    if (el) setTarget(el);
    }, []);

  return target ? createPortal(
    <Asteroid key="pleasedontchange" diameter={diameter} hazard={hazard} />,
    target
  ) : null;
}