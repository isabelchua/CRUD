import React from 'react';
import './App.css';
import firebase from './firebase';
import SpellInput from './SpellInput';

function App() {
	const [spells, setSpells] = React.useState([]);

	//console.log(db);

	React.useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			const data = await db.collection('users').get();
			setSpells(
				data.docs.map(doc => ({
					...doc.data(),
					id: doc.id
				}))
			);
			//console.log(data.docs.map(doc => doc.data()));
		};
		fetchData();
	}, []);

	return (
		<div className="App">
			<ul>
				{spells.map(spell => (
					<li key={spell.name}>
						<SpellInput spell={spell} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
