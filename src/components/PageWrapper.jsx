function PageWrapper({ children }) {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
}

export default PageWrapper;
