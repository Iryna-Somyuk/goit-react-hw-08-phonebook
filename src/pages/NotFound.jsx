import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
    return (
      <>
        <NavLink to='/'>Go back</NavLink>
        <img src={'https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2016/12/22/ae36c0d0-52ea-4a4a-a691-bec9b2458f5b.png'} alt="error 404" style={{ borderRadius: '5px' }} />
      </>
    );
  };
  
  export default NotFoundPage;