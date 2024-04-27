const heading = React.createElement("h1", {}, [
  [
    React.createElement("h5", {}, "this is inside"),
    React.createElement("h2", {}, "2nd child"),
  ],
  [
    React.createElement("h5", {}, "this is 3 inside"),
    React.createElement("h2", {}, "4th child"),
  ],
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
