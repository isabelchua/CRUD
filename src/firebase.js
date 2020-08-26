import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyC4RNIkzZyZfO2i3PUFydWrhSk2gylOMAg',
	authDomain: 'react-crud-3cf8c.firebaseapp.com',
	databaseURL: 'https://react-crud-3cf8c.firebaseio.com',
	projectId: 'react-crud-3cf8c',
	storageBucket: 'react-crud-3cf8c.appspot.com',
	messagingSenderId: '602258012951',
	appId: '1:602258012951:web:2ef9531f43f0d372d2d552'
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
