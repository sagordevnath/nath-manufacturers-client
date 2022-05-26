import React from "react";

const Answer3 = () => {
  return (
    <div>
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">How does prototypical inheritance work?</h2>
          <p>
            Prototypal Inheritance is that an object can point to another object
            and inherit all its properties. The main purpose is to allow
            multiple instances of an object to share common properties, hence,
            the Singleton Pattern. The core idea of prototypal inheritance is
            incredibly simple, simpler than classes. What makes JavaScript so
            complicated is that this core idea is obscured by trying to make the
            creation of instances (of a given type) look like Java.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Answer3;
