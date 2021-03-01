import { ContactProps } from 'src/components/Contact/Contact';
import dummyAvatar1Img from 'src/assets/dummy-avatar1.png';
import dummyAvatar2Img from 'src/assets/dummy-avatar2.png';
import dummyAvatar3Img from 'src/assets/dummy-avatar3.png';

const getContacts = () => {
	const contacts:Array<ContactProps> = [
		{
			name: 'Annette Black',
			role: 'HR Manager',
			avatarUrl: dummyAvatar1Img,
			isAvailable: false,
		},
		{
			name: 'Suzan Winterson',
			role: 'HR Google',
			avatarUrl: dummyAvatar2Img,
			isAvailable: true,
		},
		{
			name: 'Jacob Jones',
			role: 'Product Manager at Amazon',
			avatarUrl: dummyAvatar3Img,
			isAvailable: true,
		},
	];
	return Promise.resolve(contacts);
};

const api = {
	getContacts,
};

export default api;
