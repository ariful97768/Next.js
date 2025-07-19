import React from 'react';

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div>
            Review of something
            {children}
        </div>
    );
};

export default RootLayout;