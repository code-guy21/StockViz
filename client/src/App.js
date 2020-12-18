import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
	useEffect(() => {
		axios.get('/api').then(res => {
			console.log(res.data);
		});
	});

	return <div>App</div>;
};

export default App;
