import React, { useEffect, useState } from "react";

export default function VerMais({ children }) {
  const [showMore, setShowMore] = useState(false);

  const text = { children };
  useEffect(() => {
    //ve se tem texto
    let characters = document.getElementsByClassName(
      "vtex-rich-text-0-x-paragraph--seoCount"
    ).length;
    //se não tiver deleta os elementos para não ficar expaço em branco
    if (characters == 0) {
      document.getElementById("see-more-text").style.display = "none";
      document.getElementById("paragraph--seoText").style.display = "none";

    }
    // aguarda para não mostrar o texto todo enquanto carrega
    setTimeout(() => {
      document.getElementById("container--seoText").style.display = "block";
    }, 500);
    if (showMore) {
      document.getElementById("paragraph--seoText").style.height = "auto";
    } else {
      document.getElementById("paragraph--seoText").style.height = "70px";
      document.getElementById("paragraph--seoText").style.overflow = "hidden";
    }
  });
  return (
    <div>
      <div id="container--seoText" style={{ display: "none" }}>
        <p
          id="paragraph--seoText"
          className="vtex-rich-text-0-x-paragraph--seo vtex-rich-text-0-x-paragraph--seo-block"
        >
          {children}
        </p>
        <spam
          id="see-more-text"
          className="vtex-rich-text-0-x-paragraph--seoText vtex-rich-text-0-x-see-more"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Ver menos" : "Ver mais"}
        </spam>
      </div>
    </div>
  );
}
