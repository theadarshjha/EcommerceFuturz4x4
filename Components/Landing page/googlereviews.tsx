import { useEffect } from 'react';

const GoogleReviewsWidget = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="elfsight-app-60462382-8dc2-4dce-9a2d-ee7d4a531de1" data-elfsight-app-lazy></div>
    </div>
  );
};

export default GoogleReviewsWidget;
