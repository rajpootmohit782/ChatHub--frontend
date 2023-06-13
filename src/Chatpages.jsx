import React from 'react';
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const ChatPage = (props) => {
  console.log('1==> ', props.user.username, props.user.secret);
  const chatProps = useMultiChatLogic(
    '3a2a5607-eb5c-45b5-9acc-e27deb33bdf6',
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  );
};

export default ChatPage;
