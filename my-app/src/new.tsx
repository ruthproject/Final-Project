import React from "react";
// import gmailApi from "react-api";
import gmailApi from 'react-gmail'
 
export default class New extends React.Component {
  state = {
    messages: []
  };
 
  getMessages = () => {
    gmailApi.getMessages(true, 5,"AIzaSyD1OG_0ToNSNLxzBjMKBElXl6WzxDL1WqM").then(res => {
      this.setState({ messages: (res) });
    });
  };
 
  // Another way to get messages by ids
  // getMessages = () => {
  //   gmailApi.getMessageIds(false, 5).then(resIds => {
  //     gmailApi.getMessages(gmailApi.getArrayOfIds(resIds)).then(res => {
  //       this.setState({ messages: gmailApi.normalizeData(res) });
  //     });
  //   });
  // }
 
  render() {
    const { messages } = this.state;
    return (
      <div>
        <button onClick={this.getMessages}>Get Messages</button>
        <ul>
          {messages.map(message => (
            <li key="message.id">
              <div>
                <span>vhdffujvip
                  {/* {message.subject}: {message.snippet} */}
                </span>
                {/* <p>{message.date}</p> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}