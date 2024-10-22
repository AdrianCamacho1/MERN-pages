import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";               // Import Login component
import Register from "./components/Register";         // Import Register component
import Checkout from "./components/Checkout";         // Import Checkout component
import Navbar from "./components/Navbar";

function App() {
	return (
		<Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/create' element={<CreatePage />} />
				<Route path='/login' element={<Login />}/>             {/* Login route */}
				<Route path='/register' element={<Register />} />      {/* Registration route */}
				<Route path='/checkout' element={<Checkout />} />      {/* Checkout route */}
			</Routes>
		</Box>
	);
}

export default App;
