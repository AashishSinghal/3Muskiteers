import React from "react";
import "./PopUp.Style.scss";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}


export default Popup;


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showPopup: false,
//     };
//   }
//   togglePopup() {
//     this.setState({
//       showPopup: !this.state.showPopup,
//     });
//   }
//   render() {
//     return (
//       <div className="popup-component">
//         <h1>hihi</h1>
//         <button onClick={this.togglePopup.bind(this)}>show popup</button>
//           try me when popup is open
//         </button>

//         {this.state.showPopup ? (
//           <Popup text="Close Me" closePopup={this.togglePopup.bind(this)} />
//         ) : null}
//       </div>
//     );
//   }
// }
