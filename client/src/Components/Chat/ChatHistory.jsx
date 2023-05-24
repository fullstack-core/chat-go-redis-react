import React from 'react';

import { Text, Box, Container } from '@chakra-ui/react';
import { formatDate } from '../../utils';

const ChatHistory = (currentUser, chats) => {
  const history = chats.map(m => {
    // incoming message on left side
    let margin = '0%';
    let bgcolor = '#e9e9e9';
    let textAlign = 'left';
    let color = 'black';

    if (m.from === currentUser) {
      // outgoing message to right
      margin = '50%';
      bgcolor = 'blue.400';
      textAlign = 'right';
      color = 'white';
    }

    const ts = new Date(m.timestamp * 1000);

    return (
      <Box
        key={m.id}
        width={'100%'}
        display="flex"
        flexDirection="row"
        justifyContent={textAlign}
      >
          <Box
          textAlign={textAlign}
          width={'fit-content'}
          p={2}
          marginTop={1}
          marginBottom={1}
          marginLeft={margin}
          paddingRight={2}
          bg={bgcolor}
          borderRadius={20}
          color={color}
        >
          <Text> {m.message}</Text>
          <Text as={'sub'} fontSize="xs">
            {formatDate(ts.toUTCString())}
          </Text>
        </Box>
      </Box>
    );
  });

  return <Container>{history}</Container>;
};

export default ChatHistory;
