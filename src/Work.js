import React, { Component } from 'react';
import { data } from './data'
import styles from './nav.css'
/**
 * A title section w/ ma name
 */
export default class Work extends Component {
  render() {
    const historyItems = data.workHistory.map((obj) => {
      return <li key={obj.id}>
               <div>
                  <time>{obj.from}</time>
                  <p>{obj.title} - {obj.description}</p>
                </div>
            </li>
    })
    return (
      <div id="work" className={styles.pageSlide}>
        <section className={styles.timeline}>
          <ul>
            {historyItems}
          </ul>
        </section>
      </div>
    );
  }
}

               // <table>
               //  <tr>
               //    <td><time>{obj.to}</time></td>
               //    <td>{obj.title} <br />
               //      <a href={obj.companyWebsite}>{obj.company}</a>
               //    </td>
               //  </tr>
               //  <tr>
               //    <td colSpan="2">{obj.description}</td>
               //  </tr>
               // </table>