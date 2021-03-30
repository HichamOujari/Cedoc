import React, { Component } from 'react';
import "./outils.css"


class TableData extends Component {
  render() {
    return (
      <div className="TableComp">
          <table>
              <thead>
                  <tr>
                      {this.props.attribute.map((ele,index)=>{
                          return (<th key={index}>ele</th>)
                      })}
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    {this.props.data.map((ele,index)=>{
                          return (<>
                              <td key={index}>{ele}</td>
                              <td key={index}>{ele}</td>
                              <td key={index}>{ele}</td>
                              <td key={index}>{ele}</td>
                              <td key={index}>{ele}</td>
                              
                            </>
                          )
                      })}
                  </tr>
              </tbody>
              <tfoot></tfoot>
          </table>
      </div>
    );
  }
}


export default TableData;