import React, { useState } from 'react';

import Dashboard from './Dashboard';
import Login from './Login';

const App = (): React.ReactElement => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        isLoggedIn
            ? <Dashboard />
            : <Login onLogin={onLogin} />
    );
};

export default App;
