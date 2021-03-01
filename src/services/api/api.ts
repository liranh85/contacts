export interface Contact {
	name: string;
	role: string;
	avatarUrl: string;
	isAvailable: boolean;
}

const getContacts = () => {
	const contacts:Array<Contact> = [
		{
			name: 'Annette Black',
			role: 'HR Manager',
			avatarUrl: 'https://i.pinimg.com/564x/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3.jpg',
			isAvailable: true,
		},
	];
	return Promise.resolve(contacts);
};

const api = {
	getContacts,
};

export default api;