import React, { useEffect } from "react";

function ArrowDown() {
    useEffect(() => {
        const arrows = document.querySelectorAll('.arrow');
        arrows.forEach(arrow => arrow.style.animation = 'none');
        setTimeout(() => arrows.forEach(arrow => arrow.style.animation = ''), 100);
    }, []);
    return (
      <div className="arrow-container">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </div>
    );
}

export default ArrowDown;
