import React, { useEffect, useRef, useState } from 'react';
import './css/style.css';

const Blob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const blobRef = useRef(null);

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (blobRef.current) {
      blobRef.current.style.transform = `translate(${position.x - 50}px, ${position.y - 50}px)`;
    }
  }, [position]);

  return <div className="blob" ref={blobRef} />;
};

export default Blob;