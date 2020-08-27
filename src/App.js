import React from 'react';
import './App.css';
import firebase from './firebase';
import SpellInput from './SpellInput';

function App() {
	const [spells, setSpells] = React.useState([]);
	const [newSpellName, setNewSpellName] = React.useState();

	//console.log(db);

	React.useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			//const data = await db.collection('users').get();

			// setSpells(
			// 	data.docs.map(doc => ({
			// 		...doc.data(),
			// 		id: doc.id
			// 	}))

			db.collection('users')
				//.orderBy('timestamp', 'desc')
				.onSnapshot(snapshot =>
					setSpells(
						snapshot.docs.map(doc => ({
							id: doc.id,
							...doc.data()
						}))
					)
				);
			//console.log(data.docs.map(doc => doc.data()));
		};
		fetchData();
	}, []);

	const onCreate = () => {
		const db = firebase.firestore();
		db.collection('users').add({ name: newSpellName });
	};

	return (
		<div className="App">
			<ul>
				<input
					value={newSpellName}
					onChange={e => setNewSpellName(e.target.value)}
				/>
				<button onClick={onCreate}>Create</button>

				{/* take note add ID */}
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
