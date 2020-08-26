import React from 'react';

function SpellInput({ spell }) {
	const [name, setName] = React.useState(spell.name);

	return (
		<div>
			{/* <input defaultValue={spell.name}/> */}
			<input
				value={name}
				onChange={e => {
					setName(e.target.value);
				}}
			/>
			<button>Update</button>
		</div>
	);
}

export default SpellInput;
