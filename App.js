


/*
 <div id="parent">
      <div id="child">
            <h1>ReactElement
                </h1>
      </div>
 </div>



*/
const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"i am an ReactElement")))

const root=ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(parent);