import React from 'react';
import './App.css';
import firebase from './firebase';

function App() {
	const [spells, setSpells] = React.useState([]);
	let db = firebase.firestore();
	console.log(db);

	React.useEffect(() => {
		const fetchData = async () => {
			let db = firebase.firestore();
			//console.log(db);
			const data = await db.collection('users').get();
			setSpells(data.docs.map(doc => doc.data()));
			console.log(data.docs.map(doc => doc.data()));
		};
		fetchData();
	}, []);

	return (
		<div className="App">
			<ul>
				{spells.map(spell => (
					<li key={spell.name}>{spell.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
