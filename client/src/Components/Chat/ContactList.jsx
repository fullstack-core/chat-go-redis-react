import React from 'react';

import { Text, Box, Divider } from '@chakra-ui/react';
import { formatDate } from '../../utils';

const ContactList = (contacts, sendMessage) => {
  const contactList = contacts.map(c => {
    const ts = new Date(c.last_activity * 1000);

    return (
      <div key={c.username}>
        <Box
          as="button"
          width={'100%'}
          key={c.username}
          p={2}
          marginTop={2}
          marginBottom={2}
          borderRadius={20}
          borderColor="-moz-initial"
          borderBottomColor={'whiteAlpha.500'}
          hoverBgColor={'whiteAlpha.700'}
          onClick={() => sendMessage(c.username)}
        >
          <Text textAlign={'right'} fontSize="xs">{formatDate(ts.toDateString())}</Text>
          <Text as={'sub'} fontSize="xs">
            {c.username} 
          </Text>
        </Box>
        <Divider></Divider>
      </div>
    );
  });

  return contactList;
};

export default ContactList;
