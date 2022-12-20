const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Added event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// Implemented a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if(!promptEvent){
        return;
    }
    promptEvent.prompt();
    window.defferedPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// Added handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
