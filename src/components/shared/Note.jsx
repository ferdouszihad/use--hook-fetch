const Note = ({ children }) => {
  return (
    <div className="bg-yellow-100 text-sm text-justify m-4 p-5 rounded flex items-center gap-2">
      <h2 className="text-4xl">⚠️</h2>
      {children}
    </div>
  );
};

export default Note;
