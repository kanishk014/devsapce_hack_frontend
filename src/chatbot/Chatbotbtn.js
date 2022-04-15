import React, { useState } from "react";
import { BiBot } from "react-icons/bi";
import Chatbot from "react-chatbot-kit";
import './Chatbotbtn.css';

import "react-chatbot-kit/build/main.css";

import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";



function Chatbotbtn({ scrollState }) {
    // <a href="javascript:void(0)" id="back-to-top">
	// 		<i class="fas fa-angle-double-up"></i>
	// 	</a>;

  const [close, setClose] = useState(true);

	return (
		<div>			
				<div
					id="back-to-top"
					style={{ display: "block"}}
					className="back-to-top"				
				>
          <div className={`chatbot-modal ${close && "hide-btn"}`}>
            <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
          </div>          
					<BiBot size={22} 	onClick={() => setClose(!close)} >{""} </BiBot>
				</div>			
		</div>
	);
}

export default Chatbotbtn;
