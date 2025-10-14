import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Inject analytics script if configured
    const analyticsProvider = import.meta.env.VITE_ANALYTICS_PROVIDER;
    const analyticsDomain = import.meta.env.VITE_ANALYTICS_DOMAIN;
    const gaId = import.meta.env.VITE_GA_ID;

    if (analyticsProvider === "plausible" && analyticsDomain) {
      const script = document.createElement("script");
      script.defer = true;
      script.dataset.domain = analyticsDomain;
      script.src = "https://plausible.io/js/script.js";
      document.head.appendChild(script);
    } else if (analyticsProvider === "ga4" && gaId) {
      // Google Analytics 4
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `;
      document.head.appendChild(script2);
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
