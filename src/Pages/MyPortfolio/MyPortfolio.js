import React from "react";

const MyPortfolio = () => {
  return (
    <div className="mt-20">
      <div className= 'text-2xl uppercase text-center text-primary font-bold'>
        <h1>About Me</h1>
      <h2>My simple portfolio</h2>
      <progress className="progress w-56"></progress>
      </div>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/G9nY4tb/MERN.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Sagor Devnath</h1>
              <p className='py-2'>Junior Full Stack Web Developer</p>
              <p className="py-3">ssagor64@gmail.com</p>
              <div>
                

                <div className="card shadow-xl ">
  <div className="p-10">
    <h1 className="text-2xl font-bold">My Skill</h1>
    <p>Hello! I am Sagor Devnath. I am working to be a professional web developer. To be a web developer I know..</p>
                <span className='text-xl'>React:</span> <progress className="progress progress-accent w-56" value="70" max="100"></progress>70%<br />
                <span className='text-xl'>Node:</span> <progress className="progress progress-accent w-56" value="50" max="100"></progress>50%<br />
                <span className='text-xl'>Express:</span> <progress className="progress progress-accent w-56" value="60" max="100"></progress>60%<br />
                <span className='text-xl'>Mongodb:</span> <progress className="progress progress-accent w-56" value="70" max="100"></progress>70%<br />
                <span className='text-xl'>JavaScript:</span> <progress className="progress progress-accent w-56" value="80" max="100"></progress>80%<br />
                <span className='text-xl'>Tailwind:</span> <progress className="progress progress-accent w-56" value="75" max="100"></progress>75%<br />
                <span className='text-xl'>Bootstrap:</span> <progress className="progress progress-accent w-56" value="82" max="100"></progress>82%<br />
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-screen bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">My Previous website Link</h2>
    <a href="https://nath-toys.web.app" target='_blank'>Nath Toys</a>
    <a href="https://care-giver-82af9.web.app" target='_blank'>Care Giver</a>
    <a href="https://nath-toys.web.app" target='_blank'>Nath Toys</a>
  </div>
</div>
    </div>
  );
};

export default MyPortfolio;
