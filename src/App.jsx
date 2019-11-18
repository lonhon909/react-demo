import React, { useRef, useEffect } from 'react';

export default function App() {
  const countRenderRef = useRef(1);
  
  useEffect(function afterRender() {
    countRenderRef.current++;
  });

  return (
    <div>I've rendered {countRenderRef.current} times</div>
  );
}
