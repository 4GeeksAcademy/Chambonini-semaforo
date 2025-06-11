const lights = document.querySelectorAll('.light');

lights.forEach(light => {
  light.addEventListener('click', () => {
    
    lights.forEach(l => l.classList.remove('active'));
    
    light.classList.add('active');
  });
});
