import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Cek apakah ada parameter 'u' di URL
    const searchParams = new URLSearchParams(location.search);
    const targetUrl = searchParams.get("target"); // Mendapatkan nilai dari parameter 'u'

    if (targetUrl) {
      // Redirect ke nilai parameter 'u' jika ada
      window.location.href = targetUrl;
    }
  }, [location, navigate]);

  return (
    <>
     {/* <h6>Redirect...</h6> */}
    </>
  );
};

export default App;
