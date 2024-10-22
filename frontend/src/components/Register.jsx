import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/register', { email, password });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <Button mt={4} colorScheme="teal" type="submit">Register</Button>
            </form>
        </Box>
    );
};

export default Register;
