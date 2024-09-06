export default () => {
  const ToggleOverlay = () => {
    const registerContainer = document.documentElement as HTMLElement;

    registerContainer.classList.toggle('overlay');
    window.scrollTo(0, 0);
    console.log('Hook ToggleOverlay().');
  };

  return {
    ToggleOverlay,
  };
};
