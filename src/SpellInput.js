import React from 'react';
import firebase from './firebase';

export const SpellInput = ({ spell }) => {
	const [name, setName] = React.useState(spell.name);

	const onUpdate = () => {
		const db = firebase.firestore();
		db.collection('users')
			.doc(spell.id)
			.set({ ...spell, name });
	};

	return (
		<div>
			{/* <input defaultValue={spell.name}/> */}
			<input
				value={name}
				onChange={e => {
					setName(e.target.value);
				}}
			/>
			<button onClick={onUpdate}>Update</button>
		</div>
	);
};

export default SpellInput;
