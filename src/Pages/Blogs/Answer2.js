import React from "react";

const Answer2 = () => {
  return (
    <div>
      <div className="card bg-neutral text-neutral-content my-10">
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            React's useState is the best option for local state management. If
            we need a global state solution, the most popular ones are Redux,
            MobX, and built-in Context API. So choice will depend on the size of
            project, needs, and engineers' expertise. Or another different ways
            is to create a function and manage state by this state.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Answer2;
