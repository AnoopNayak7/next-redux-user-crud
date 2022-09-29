import React from "react";

const Navbar = () => {
  return (
    <div className="py-2 font-bold text-xl flex justify-between items-center">
      <div className="text-secondary">
        InstaSafe<span className="text-primary text-xl">.</span>
      </div>
      <div className="flex gap-2 items-center border-2 border-white bxswww rounded-full">
        <img
          className="w-9 h-9 rounded-full"
          src={
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          }
        />
      </div>
    </div>
  );
};

export default Navbar;
