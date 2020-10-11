import React from 'react';
import Data from './data/Data2.json';
import { List } from "semantic-ui-react";

class AboutUs extends React.Component {

    renderTableData() {
      return Data.map((el, index) => {
         const { YearMonthDay, Time, Height } = el //destructuring
         return (
            <tr key={index}>
               <td>{YearMonthDay}</td>
               <td>{Time}</td>
               <td>{Height}</td>
            </tr>
         )
      })};
  
    render() {
      return (
        <table style={{marginTop: '100px', position: "relative", left: '40%', textAlign: 'center'}} id='Data'>
        <tbody>
           <tr><th style={{position: "relative", left:'55px'}}>{"Year-Month-Day/"}{"Time/"}{"Height"}</th></tr>
           {this.renderTableData()}
        </tbody>
     </table>
      );
    };
}

export default AboutUs;
