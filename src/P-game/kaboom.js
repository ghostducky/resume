// src/components/KaboomGame.js
import React, { useEffect, useRef } from 'react';
import kaboom from 'kaboom';

const KaboomGame = () => {
  const gameContainer = useRef(null);

  useEffect(() => {
    // Initialize Kaboom.js
    const k = kaboom({
      width: 640,
      height: 480,
      canvas: gameContainer.current,
      scale: 2,
      clearColor: [0, 0, 0, 1],
    });

    // Define your Kaboom.js game here
    k.scene("main", () => {
      k.add([
        k.text("Hello Kaboom.js!", 32),
        k.pos(100, 100),
        k.color(1, 1, 1),
      ]);

      k.loop(2, () => {
        k.add([
          k.rect(24, 24),
          k.pos(k.rand(0, 640), k.rand(0, 480)),
          k.color(k.rand(0, 1), k.rand(0, 1), k.rand(0, 1)),
        ]);
      });
    });

    k.start("main");

    // Cleanup Kaboom.js on component unmount
    return () => {
      k.destroy();
    };
  }, []);

  return <canvas ref={gameContainer} />;
};

export default KaboomGame;
