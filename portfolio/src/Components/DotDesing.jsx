import React from "react";

function DotDesign() {
    return (
        <div className="dot-grid">
            {Array(9).fill().map((_, i) => (
                <div key={i} className="dot"></div>
            ))}
        </div>
    )
}

export default DotDesign;