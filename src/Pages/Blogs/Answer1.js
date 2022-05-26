import React from "react";

const Answer1 = () => {
  return (
    <div>
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center ">
          <h2 className="card-title">
            How will you improve the performance of a React Application?
          </h2>
          <p>
            Web app performance issues are not related to React. Analytics
            tracking libraries, excessive CSS animations, non-optimized images,
            iframes, and many more factors can contribute to poor performance.
            Some of improving performance is Using Immutable Data Structures,
            Function/Stateless Components and React.PureComponent, Dependency
            optimization , Use React.Fragments to Avoid Additional HTML Element
            Wrappers, Avoid using Index as Key for map, Avoid Inline Function
            Definition in the Render Function.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Answer1;
