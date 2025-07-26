document.addEventListener('DOMContentLoaded', () => {
  fetch('code_ex/C/ejPunterosRobot.c')
    .then(res => {
      if (!res.ok) throw new Error("No se pudo cargar el código.");
      return res.text();
    })
    .then(code => {
      const codeElement = document.getElementById("ejPunterosRobot");
      codeElement.textContent = code;

      if (typeof hljs !== 'undefined') {
        hljs.highlightElement(codeElement);
      } else {
        console.error("Highlight.js no cargó correctamente.");
      }
    })
    .catch((err) => {
      console.error(err);
      document.getElementById("ejPunterosRobot").textContent = "Error al cargar el código.";
    });
});
