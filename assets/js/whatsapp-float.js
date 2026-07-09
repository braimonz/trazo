/*=== Botón flotante de WhatsApp (independiente, se carga en todas las páginas) ===*/
(function () {
  "use strict";

  var WA_PHONE = "5215545937362"; // +52 1 55 4593 7362
  var WA_TEXT =
    "¡Hola! Vengo desde su sitio web y me gustaría recibir más información, por favor.";

  function initWhatsAppFloat() {
    if (document.getElementById("wa-float-btn")) return;

    var link =
      "https://wa.me/" + WA_PHONE + "?text=" + encodeURIComponent(WA_TEXT);

    var a = document.createElement("a");
    a.id = "wa-float-btn";
    a.href = link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", "Escríbenos por WhatsApp");
    a.title = "Escríbenos por WhatsApp";
    a.innerHTML =
      '<svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true" focusable="false">' +
      '<path fill="currentColor" d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.46 1.71 6.402L3.2 28.8l6.59-1.68a12.74 12.74 0 0 0 6.21 1.594h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.053A12.72 12.72 0 0 0 16.003 3.2Zm0 23.09h-.004a10.6 10.6 0 0 1-5.4-1.48l-.387-.23-4.01 1.024 1.07-3.91-.252-.4a10.56 10.56 0 0 1-1.62-5.63c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.87-4.77 10.64-10.64 10.64Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.44 5.46 4.82.76.33 1.36.53 1.82.68.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z"/>' +
      "</svg>";

    document.body.appendChild(a);
  }

  // Se coloca por ENCIMA del boton de subir (.progress-wrap: right:30 bottom:30, 46px)
  // para que no se empalmen.
  var css =
    "#wa-float-btn{position:fixed;right:23px;bottom:88px;z-index:99999;" +
    "display:flex;align-items:center;justify-content:center;width:60px;height:60px;" +
    "border-radius:50%;background:#25D366;color:#fff;box-shadow:0 6px 18px rgba(0,0,0,.25);" +
    "transition:transform .2s ease,box-shadow .2s ease;text-decoration:none;" +
    "animation:waFloatPulse 2.4s ease-out infinite;}" +
    "#wa-float-btn:hover{transform:scale(1.08);box-shadow:0 8px 22px rgba(0,0,0,.35);color:#fff;}" +
    "#wa-float-btn svg{width:32px;height:32px;display:block;}" +
    "@keyframes waFloatPulse{0%{box-shadow:0 6px 18px rgba(0,0,0,.25),0 0 0 0 rgba(37,211,102,.5);}" +
    "70%{box-shadow:0 6px 18px rgba(0,0,0,.25),0 0 0 16px rgba(37,211,102,0);}" +
    "100%{box-shadow:0 6px 18px rgba(0,0,0,.25),0 0 0 0 rgba(37,211,102,0);}}" +
    "@media (max-width:576px){#wa-float-btn{right:18px;bottom:82px;width:52px;height:52px;}" +
    "#wa-float-btn svg{width:27px;height:27px;}}";

  var style = document.createElement("style");
  style.id = "wa-float-style";
  style.appendChild(document.createTextNode(css));
  (document.head || document.documentElement).appendChild(style);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWhatsAppFloat);
  } else {
    initWhatsAppFloat();
  }
})();
