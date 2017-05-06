import React, { Component } from 'react';
import { data } from './data'
/**
 * A title section w/ ma name
 */
export default class Work extends Component {
  htmlDescription(desc) {
    return {__html: desc};
  }
  render() {
    const historyItems = data.workHistory.map((obj) => {
      return <tr key={obj.id} className="workRow">
               <td className="companyCol">
                  <div className="company"><a href={obj.companyWebsite} target="_blank">{obj.company}</a></div>
                  <p className="workDates">{obj.from} - {obj.to}</p>
               </td>
               <td  className="roleCol">
                  <div className="jobTitle">{obj.title}</div>
                  <p className="jobDescription" dangerouslySetInnerHTML={this.htmlDescription(obj.description)}></p>
               </td>
            </tr>
    })
    return (
      <div id="work" className='pageSlide'>
        <table className='timeline'>
          <tbody>
            {historyItems}
          </tbody>
        </table>
      </div>
    );
  }
}