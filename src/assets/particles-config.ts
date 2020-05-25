export const ParticlesConfig = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0.1,
        color: '#ffffff'
      },
      polygon: {
        nb_sides: 10
      }
    },
    opacity: {
      value: 0,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 2,
      random: false,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: '#ffffff',
      opacity: 0.9,
      width: 0.8
    },
    move: {
      enable: true,
      speed: 8,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: true,
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 3000
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 200,
        size: 80,
        duration: 0.4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: false
};
