import React, { useEffect } from 'react';
import { addConsoleMessage } from './utils/consoleMessage';

function App() {
    useEffect(() => {
        addConsoleMessage();
    }, []);
}

export default App; 