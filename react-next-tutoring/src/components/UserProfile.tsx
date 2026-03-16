// src/components/UserProfile.tsx
import React from 'react';
import type { JSX } from 'react';

type UserRole = 'admin' | 'user' | 'guest';

interface UserProfileProps {
    name: string;
    age?: number;
    role: UserRole;
}

export const UserProfile = (props: UserProfileProps): JSX.Element => {
    const { name, age, role } = props;

    return (
        <div>
            <h1>{name.toUpperCase()}</h1>
            <p>Age: {age ? age : 'Unknown'}</p>
            {role === 'admin' && <button>Delete User</button>}
        </div>
    );
};
