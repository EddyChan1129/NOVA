import { createApp } from 'vue';
import useOverlay from './useOverlay';
import type { Router } from 'vue-router';

const { ToggleOverlay } = useOverlay();

export default () => {
  const displaySuccess = (
    router: Router,
    title: string = '注册成功',
    actions: string = '前往登录页面',
    goTo: string = '/'
  ) => {
    // Create a new Vue instance for the Success component
    const app = createApp(Success, { title, actions, goTo });

    // Ensure the router is available to the app
    app.use(router);

    // Create a div element to mount the component
    const toast = document.createElement('div');
    toast.classList.add('toast');

    // Append the div to the body or the desired container
    document.body.appendChild(toast);

    // Mount the Vue instance to the div
    const vm = app.mount(toast);

    // Define a function to safely remove the toast
    const removeToast = () => {
      if (toast.parentNode) {
        app.unmount();
        document.body.removeChild(toast);
      }
      ToggleOverlay();
      router.push(goTo);
    };

    // Listen for the unmount event
    toast.addEventListener('click', removeToast);
  };

  return {
    displaySuccess,
  };
};
