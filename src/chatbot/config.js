import { createChatBotMessage } from "react-chatbot-kit";
import ListProperties from "./widgets/ListProperties";

const botName = "VRDOOR Bot";

const config = {
  initialMessages: [createChatBotMessage(`Hello User. How may I help you?`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#00c194",
    },
  },

  widget: [
    {
      widgetName: 'properties',
      widgetFunc: (props) => <ListProperties {...props}/>
    }
  ]
};

export default config;
