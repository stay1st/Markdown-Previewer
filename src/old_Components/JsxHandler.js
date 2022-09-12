// import React, {useState} from 'react';
// import App from './App';

// class JsxHandler extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             h1: '# = Heading 1',
//             h2: '## = Heading 2',
//             h3: '### = Heading 3',
//             bold: '**bold** = Bold Text',
//             text: 'regular-text = Looks like this!'
//         }
//     }

//     changeForJsx(bool) {

//         this.setState({resultJsx: bool});
//     }


//     render(){
//         return(
//             <div onChange={this.changeForJsx}>
//             {console.log("JsxHandler this.prop:", this.props)}
//             {console.log('resultJsx()=>this.state.resultJsx:', this.state.resultJsx)}
//                 <h1>{this.state.h1}</h1>
//                 <h2>{this.state.h2}</h2>
//                 <h3>{this.state.h3}</h3>
//                 <strong>{this.state.bold}</strong>
//                 <p>{this.state.text}</p>
//             </div>
//         )
//     }
// }
// export default JsxHandler