import React, {useEffect, useState} from 'react';

const url = 'https://api.github.com/users/QuincyLarsons';

const MultipleReturns = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState('Default User');

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    setIsLoading(false);
                    setIsError(true);
                }
            })
            .then(user => {
                const {login} = user;
                setUser(login);
                setIsLoading(false);
            })
            .catch(error => setIsError(true));
    }, []);

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    if (isError) {
        return (
            <div>
                <h1>Error...</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>{user}</h1>
        </div>
    )
};

export default MultipleReturns;
