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

	const onDelete = () => {
		const db = firebase.firestore();
		db.collection('users').doc(spell.id).delete();
	};

	return (
		<div>
			{/* <input defaultValue={spell.name}/> */}
			<input
				onBlur={onUpdate}
				value={name}
				onChange={e => {
					setName(e.target.value);
				}}
			/>
			{/* <button >Update</button> */}
			<button onClick={onDelete}>X</button>
		</div>
	);
};

export default SpellInput;
