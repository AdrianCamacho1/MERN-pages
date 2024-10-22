import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { email, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box maxW="md" mx="auto" p={4}>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <Button mt={4} colorScheme="teal" type="submit">Login</Button>
            </form>
        </Box>
    );
};

export default Login;
