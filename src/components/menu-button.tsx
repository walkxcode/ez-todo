import React from 'react';
import { Button, Icon, IButtonProps } from 'native-base';
import { Feather } from '@expo/vector-icons';

interface Props extends IButtonProps {
	active: boolean;
	icon: string;
	children: React.ReactNode;
}

const MenuButton = ({ active, icon, children, ...props }: Props) => {
	return (
		<Button
			size="lg"
			_light={{
				colorScheme: 'purple',
				_pressed: {
					bg: 'primary.100'
				},
				_text: {
					color: active ? 'purple.50' : 'purple.500'
				}
			}}
			_dark={{
				colorScheme: 'purple',
				_pressed: {
					bg: 'primary.600'
				},
				_text: {
					color: active ? 'purple.50' : undefined
				}
			}}
			bg={active ? undefined : 'transparent'}
			variant="solid"
			justifyContent="flex-start"
			leftIcon={<Icon as={Feather} name={icon} size="sm" opacity={0.5} />}
			{...props}
		>
			{children}
		</Button>
	);
};

export default MenuButton;
