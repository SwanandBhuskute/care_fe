const img = "/images/care_logo_gray.svg";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50">
      <div className="App">
        <header className="App-header" role="status" aria-live="polite">
          <img src={img} className="App-logo" alt="Loading..." />
        </header>
      </div>
    </div>
  );
};
export default Loading;
