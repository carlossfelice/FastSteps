// import logo from "../assets/FS-logo10.jpg";
// const Footer = () => {
//   return (
//     <footer className="bg-gray-300 py-10">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <img
//               src={logo}
//               alt="Logo"
//               className="w-40 mb-4 h-24 rounded-lg"
//             />
//             <p className="text-gray-700">The Comfort Technology Company.</p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Attendance</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-800">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-800">
//                   Shipments
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-800">
//                   Payments and Security
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-800">
//                   Regret Button
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Information</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-800">
//                   Exchanges and returns
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-800">
//                   Size guides
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-800">
//                   Frequently Asked Questions
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-800">
//                   Tecnologies
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-800">
//                   Us
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Categoríes</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-800">
//                   Women
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-800">
//                   Man
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-800">
//                   Children
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-800">
//                   30% OFF
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-8 text-center text-gray-500 text-sm">
//           <p>
//             © 2023 FS. All rights reserved | Designed & Developed by Innovate
//             Group | Shopify Plus Partner
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import logo from "../assets/FS-logo10.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <img
              src={logo}
              alt="Logo"
              className="w-29 sm:w-40 mb-4 h-auto rounded-lg"
            />
            <p className="text-gray-700 text-sm sm:text-base">
              The Comfort Technology Company.
            </p>
          </div>

          {/* Attendance */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Attendance</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                >
                  Shipments
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                >
                  Payments and Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                >
                  Regret Button
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                >
                  Exchanges and returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                >
                  Size guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                >
                  Us
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                >
                  Children
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                >
                  30% OFF
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-xs sm:text-sm">
          <p>
            © 2023 FS. All rights reserved | Designed & Developed by Innovate
            Group | Shopify Plus Partner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
