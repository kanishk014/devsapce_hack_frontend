class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  anything() {
    const message = this.createChatbotMessage("Hi, How may I help you?");

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleThanks() {
    const message = this.createChatbotMessage(
      "Your Welcome! Say, Hi to start the conversation again."
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleProperty() {
    const message = this.createChatbotMessage(
      "You can find the list of all our properties here:",
      { widget: "properties" }
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleContact() {
    const message = this.createChatbotMessage(
      "Hi, Thanks you for contacting us!, Please call us at +91 9871500975"
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;
