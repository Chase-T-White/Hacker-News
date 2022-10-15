import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <div className='container'>
        <h1 className='error__title'>Oops! Page does not exist...</h1>
        <Link to={"/"} className='btn'>
          Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
