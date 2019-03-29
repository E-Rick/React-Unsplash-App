import axios from 'axios';

export default axios.create({
	baseURL : 'https://api.unsplash.com',
	headers : {
		Authorization : 'Client-ID c95c2a92ba1ed18ff00bd55ed4a4b29351d968e81197d0afe5a49fadc5bd1ffe'
	}
});
