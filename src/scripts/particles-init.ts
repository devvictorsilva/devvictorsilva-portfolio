import { loadFull } from "tsparticles";

window.particlesInit = async function (engine) {
  await loadFull(engine); // agora funciona porque usa o engine do tsparticles, não o do pacote errado
};

window.particlesLoaded = function (container) {
  console.log("Particles Loaded!", container);
};
