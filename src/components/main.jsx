import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Cek apakah ada parameter 'u' di URL
    const searchParams = new URLSearchParams(location.search);
    const targetUrl = searchParams.get("toredirect"); // Mendapatkan nilai dari parameter 'u'

    if (targetUrl) {
      // Redirect ke nilai parameter 'u' jika ada
       window.location.href = targetUrl;
    }
  }, [location, navigate]);

  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">
                New Season Arrivals
              </h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
