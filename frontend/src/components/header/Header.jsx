// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   return (
//     <nav
//       classNameName="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
//       id="ftco-navbar"
//     >
//       <div classNameName="container">
//         {/* Logo */}
//         <NavLink to="/" classNameName="navbar-brand">
//           Harbor<span>lights</span>
//         </NavLink>

//         {/* Mobile toggle button */}
//         <button
//           classNameName="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#ftco-nav"
//           aria-controls="ftco-nav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span classNameName="oi oi-menu"></span> Menu
//         </button>

//         {/* Navigation links */}
//         <div classNameName="collapse navbar-collapse" id="ftco-nav">
//           <ul classNameName="navbar-nav ml-auto">
//             <li classNameName="nav-item">
//               <NavLink
//                 to="/"
//                 classNameName={({ isActive }) =>
//                   isActive ? "nav-link active" : "nav-link"
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>

//             <li classNameName="nav-item">
//               <NavLink
//                 to="/rooms"
//                 classNameName={({ isActive }) =>
//                   isActive ? "nav-link active" : "nav-link"
//                 }
//               >
//                 Our Rooms
//               </NavLink>
//             </li>

//             <li classNameName="nav-item">
//               <NavLink
//                 to="/restaurant"
//                 classNameName={({ isActive }) =>
//                   isActive ? "nav-link active" : "nav-link"
//                 }
//               >
//                 Restaurant
//               </NavLink>
//             </li>

//             <li classNameName="nav-item">
//               <NavLink
//                 to="/about"
//                 classNameName={({ isActive }) =>
//                   isActive ? "nav-link active" : "nav-link"
//                 }
//               >
//                 About Us
//               </NavLink>
//             </li>

//             <li classNameName="nav-item">
//               <NavLink
//                 to="/blog"
//                 classNameName={({ isActive }) =>
//                   isActive ? "nav-link active" : "nav-link"
//                 }
//               >
//                 Blog
//               </NavLink>
//             </li>

//             <li classNameName="nav-item">
//               <NavLink
//                 to="/contact"
//                 classNameName={({ isActive }) =>
//                   isActive ? "nav-link active" : "nav-link"
//                 }
//               >
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;


import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <div classNameName="container">
    //     <Link classNameName="navbar-brand" to="/">Sankalp <span classNameName="text-success">Yatri Nivas</span></Link>
    //     <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
    //       <span classNameName="navbar-toggler-icon"></span>
    //     </button>

    //     <div classNameName="collapse navbar-collapse" id="mainNav">
    //       <ul classNameName="navbar-nav ms-auto">
    //         <li classNameName="nav-item"><Link classNameName="nav-link" to="/">Home</Link></li>
    //         <li classNameName="nav-item"><Link classNameName="nav-link" to="/rooms">Rooms</Link></li>
    //         <li classNameName="nav-item"><Link classNameName="nav-link" to="/about">About</Link></li>
    //         <li classNameName="nav-item"><Link classNameName="nav-link" to="/contact">Contact</Link></li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <Link className="navbar-brand" href="index.html">Harbor<span>lights</span></Link>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"><Link href="index.html" className="nav-link">Home</Link></li>
	          <li className="nav-item"><Link href="rooms.html" className="nav-link">Our Rooms</Link></li>
	          <li className="nav-item"><Link href="restaurant.html" className="nav-link">Restaurant</Link></li>
	          <li className="nav-item"><Link href="about.html" className="nav-link">About Us</Link></li>
	          <li className="nav-item"><Link href="blog.html" className="nav-link">Blog</Link></li>
	          <li className="nav-item"><Link href="contact.html" className="nav-link">Contact</Link></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    
  );
};

export default Header;
