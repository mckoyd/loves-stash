import React from "react";

const App: React.FC = () => {
  return <section className="app-section"></section>;
};

export default App;

// const App: React.FC = () => {
//     const screenSize = useScreenSizeUpdate();

//     return (
//       <section className="app-section">
//         {screenSize <= layout.mobile && (
//           <BgSidebarMobile className="bg-sidebar-mobile" />
//         )}
//         <Routes>
//           <Route path="/" element={<PersonalInfo />} />
//           <Route path="/select-your-plan" element={<SelectYourPlan />} />
//           <Route path="/add-ons" element={<h2>Add-ons</h2>} />
//           <Route path="/finish" element={<h2>Finish</h2>} />
//         </Routes>
//       </section>
//     );
//   };
