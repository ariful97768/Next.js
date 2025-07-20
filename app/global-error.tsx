"use client";

const GlobalError = () => {
  return (
    <html>
      <body>
        <div>Global errorlll</div>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          reset
        </button>
      </body>
    </html>
  );
};

export default GlobalError;
