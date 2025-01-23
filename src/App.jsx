import React, { useEffect } from 'react';
import { addConsoleMessage } from './utils/consoleMessage';

function App() {
    useEffect(() => {
        addConsoleMessage();
    }, []);

    return (
        // Your existing App content
    );
}

export default App; 