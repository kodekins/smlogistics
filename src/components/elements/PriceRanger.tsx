import { useState, useRef, useEffect } from "react";

const PriceRanger = () => {
  const [minValue, setMinValue] = useState(50);
  const [maxValue, setMaxValue] = useState(750);
  const [isDragging, setIsDragging] = useState(null);
  const sliderRef = useRef(null);

  const minPrice = 0;
  const maxPrice = 1000;

  // Calculate percentage positions for slider thumbs
  const minPercent = ((minValue - minPrice) / (maxPrice - minPrice)) * 100;
  const maxPercent = ((maxValue - minPrice) / (maxPrice - minPrice)) * 100;

  // Handle dragging logic
  const handleMouseDown = (thumb) => (e) => {
    e.preventDefault();
    setIsDragging(thumb);
  };

  const updateValue = (clientX) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percent = Math.min(
      Math.max(0, ((clientX - rect.left) / rect.width) * 100),
      100
    );
    const value = Math.round(
      minPrice + (percent / 100) * (maxPrice - minPrice)
    );

    if (isDragging === "min" && value <= maxValue - 10) {
      setMinValue(value);
    } else if (isDragging === "max" && value >= minValue + 10) {
      setMaxValue(value);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) updateValue(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches[0]) {
      e.preventDefault();
      updateValue(e.touches[0].clientX);
    }
  };

  const handleEnd = () => setIsDragging(null);

  // Global event listeners for smooth dragging
  useEffect(() => {
    if (isDragging) {
      const addEvents = () => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleEnd);
        document.addEventListener("touchmove", handleTouchMove, {
          passive: false,
        });
        document.addEventListener("touchend", handleEnd);
      };

      const removeEvents = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleEnd);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleEnd);
      };

      addEvents();
      return removeEvents;
    }
  }, [isDragging, minValue, maxValue]);

  const handleFilter = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="productprice-ranger productsidebar-single">
        <h3 className="product__sidebar-title">Price</h3>
        <div className="price-ranger">
          <div ref={sliderRef} id="slider-range">
            {/* Active track between thumbs */}
            <div
              className={`slider-track ${isDragging ? "dragging" : ""}`}
              style={{
                left: `${minPercent}%`,
                width: `${maxPercent - minPercent}%`,
              }}
            />

            {/* Min price thumb */}
            <div
              className={`slider-thumb ${
                isDragging === "min" ? "dragging" : ""
              }`}
              style={{ left: `${minPercent}%` }}
              onMouseDown={handleMouseDown("min")}
              onTouchStart={handleMouseDown("min")}
            />

            {/* Max price thumb */}
            <div
              className={`slider-thumb ${
                isDragging === "max" ? "dragging" : ""
              }`}
              style={{ left: `${maxPercent}%` }}
              onMouseDown={handleMouseDown("max")}
              onTouchStart={handleMouseDown("max")}
            />

            {/* Price labels above thumbs */}
            <div
              className={`price-label ${isDragging === "min" ? "active" : ""}`}
              style={{ left: `${minPercent}%` }}
            >
              ${minValue}
            </div>

            <div
              className={`price-label ${isDragging === "max" ? "active" : ""}`}
              style={{ left: `${maxPercent}%` }}
            >
              ${maxValue}
            </div>
          </div>

          <div className="ranger-min-max-block">
            <input
              type="text"
              readOnly
              className="min"
              value={`$${minValue}`}
            />
            <span>-</span>
            <input
              type="text"
              readOnly
              className="max"
              value={`$${maxValue}`}
            />
            <input type="submit" value="Filter" onClick={handleFilter} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceRanger;
