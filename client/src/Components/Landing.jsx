import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Stack, Text } from '@chakra-ui/react';
import { EditIcon, ArrowForwardIcon } from '@chakra-ui/icons';

function Landing() {
  return (
    <Container maxW="2xl" marginTop="3rem" centerContent>
      <Box>
        <Stack direction="row" spacing={7}>
          <Link to="register">
            <Button
              size="lg"
              leftIcon={<EditIcon />}
              colorScheme="blue"
              variant="solid"
            >
              Register
            </Button>
          </Link>
          <Link to="login">
            <Button
              size="lg"
              rightIcon={<ArrowForwardIcon />}
              colorScheme="blue"
              variant="outline"
            >
              Login
            </Button>
          </Link>
        </Stack>
      </Box>
    </Container>
  );
}

export default Landing;
