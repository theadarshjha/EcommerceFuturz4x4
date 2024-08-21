// components/YoutubeWidget.js
'use client'

import { useEffect } from 'react';

const YoutubeWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (  
    <div className="youtube-widget-container">
    <div
      className="elfsight-app-c10b8472-2a54-472a-a343-d80ec57a2181"
      data-elfsight-app-lazy
      style={{ width: '100%', height: 'auto' }} // Adjust as needed
    ></div>
  </div>
  
  );
};

export default YoutubeWidget;
