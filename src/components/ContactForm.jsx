import React, { useEffect, useState } from "react";

const ContactPage = () => {
  
  const [userCoords, setUserCoords] = useState(null);
  const [distanceKm, setDistanceKm] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const companyCoords = { lat: 16.5062, lng: 80.648 }; // Benz Circle, Vijayawada

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (x) => (x * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserCoords({ lat: latitude, lng: longitude });
        const dist = calculateDistance(
          latitude,
          longitude,
          companyCoords.lat,
          companyCoords.lng
        );
        setDistanceKm(dist.toFixed(2));
      },
      () => console.log("User location access denied.")
    );
  }, []);

  const directionsUrl = userCoords
    ? `https://www.google.com/maps/dir/?api=1&origin=${userCoords.lat},${userCoords.lng}&destination=${companyCoords.lat},${companyCoords.lng}`
    : "https://www.google.com/maps?q=Benz+Circle+Vijayawada";

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      {/* Left Panel */}
      <div className="w-full lg:w-1/2 bg-white shadow-lg z-10 p-6 flex flex-col justify-between">
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-2">Infotech Solution Point</h2>
          <p className="text-sm text-gray-600">
            📍 Benz Circle, Vijayawada, AP
          </p>
          <p className="text-sm text-gray-600 mb-2">
            📞{" "}
            <a
              href="tel:+916301851252"
              className="text-blue-600 hover:underline"
            >
              +91 63018 51252
            </a>
          </p>
          <p className="text-sm text-gray-600 mb-2">
            💬{" "}
            <a
              href="https://wa.me/916301851252"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </p>
          {distanceKm && (
            <p className="text-sm text-indigo-600 mt-2">
              📏 You are approx. {distanceKm} km away
            </p>
          )}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Show Route & Start Navigation
          </a>

          {/* Gallery */}
          <div className="mt-8">
            <p className="font-semibold mb-2">Gallery</p>
            <div className="grid grid-cols-2 gap-2">
              {["img1.jpg", "img2.webp", "img3.jpg", "img4.webp"].map(
                (img, i) => (
                  <img
                    key={i}
                    src={`/${img}`}
                    alt={`Office ${i + 1}`}
                    onClick={() => setModalImage(`/${img}`)}
                    className="h-40 w-full object-cover rounded cursor-pointer"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Map only (no address box) */}
      <div className="w-full lg:w-1/2 relative">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps?q=Benz+Circle+Vijayawada&output=embed"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Image Preview Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Preview"
            className="max-w-xl max-h-[90vh] rounded shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ContactPage;
