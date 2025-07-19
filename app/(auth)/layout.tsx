import React from 'react';

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en">
      <body
        className={`antialiased`}
      >
        <header>
          HEADER
        </header>
        {children}
        <footer>
          FOOTER
        </footer>
      </body>
    </html>
    );
};

export default AuthLayout;