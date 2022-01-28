import React from 'react';
import { ScrollView, Text, VStack, useColorModeValue, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';
import AnimatedColorBox from '../components/animated-color-box';
import Navbar from '../components/navbar';
import Masthead from '../components/masthead';

const HowtoScreen = () => {
	return (
		<AnimatedColorBox flex={1} bg={useColorModeValue('warmGray.50', 'warmGray.900')} w="full">
			<Masthead title="How to use EZ ToDo?" image={require('../assets/howto-masthead.png')}>
				<Navbar />
			</Masthead>
			<ScrollView
				borderTopLeftRadius="20px"
				borderTopRightRadius="20px"
				bg={useColorModeValue('warmGray.50', 'primary.900')}
				mt="-20px"
				pt="30px"
				p={4}
			>
				<VStack flex={1} space={4} px={4} py={2} mr={2} />
				<Text fontSize={19} w="full">
					<Feather color={useColorModeValue('purple', 'purple')} size={18} name="trash" /> Hold and swipe left
					to remove an item from your list.
				</Text>
				<Text fontSize={19} py={4} w="full">
					<Feather color={useColorModeValue('purple', 'purple')} size={18} name="edit" /> Click on any item to
					edit it.
				</Text>
				<Text fontSize={19} py={4} w="full">
					<Feather color={useColorModeValue('purple', 'purple')} size={18} name="sun" /> Change the app theme
					in the menu.
				</Text>
			</ScrollView>
		</AnimatedColorBox>
	);
};

export default HowtoScreen;
