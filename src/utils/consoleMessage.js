export const addConsoleMessage = () => {
    const styles = [
        'color: #ff0000',
        'font-size: 30px',
        'font-weight: bold',
        'text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3)',
        'padding: 20px',
    ].join(';');

    const message = [
        '%c⚠️ STOP! ⚠️',
        'This is a private area.',
        'Please close the console immediately.',
        'All actions are being monitored.',
    ].join('\n');

    console.clear();
    console.log(message, styles);

    // Additional warning
    setTimeout(() => {
        console.warn('🚫 Unauthorized access detected!');
    }, 1000);
}; 