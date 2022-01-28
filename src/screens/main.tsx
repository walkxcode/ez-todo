import React, { useCallback, useState } from 'react';
import { Icon, VStack, useColorModeValue, Fab, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import AnimatedColorBox from '../components/animated-color-box';
import TaskList from '../components/task-list';
import shortid from 'shortid';
import Masthead from '../components/masthead';
import NavBar from '../components/navbar';
import { Message } from '../utils/rand-message';

const initialData = [
	{
		id: shortid.generate(),
		subject: 'Follow WalkxCode on GitHub',
		done: false
	},
	{
		id: shortid.generate(),
		subject: 'Download EZ ToDo!',
		done: true
	}
];

export default function MainScreen() {
	const [ data, setData ] = useState(initialData);
	const [ editingItemId, setEditingItemId ] = useState<string | null>(null);

	const handleToggleTaskItem = useCallback((item) => {
		setData((prevData) => {
			const newData = [ ...prevData ];
			const index = prevData.indexOf(item);
			newData[index] = {
				...item,
				done: !item.done
			};
			return newData;
		});
	}, []);
	const handleChangeTaskItemSubject = useCallback((item, newSubject) => {
		setData((prevData) => {
			const newData = [ ...prevData ];
			const index = prevData.indexOf(item);
			newData[index] = {
				...item,
				subject: newSubject
			};
			return newData;
		});
	}, []);
	const handleFinishEditingTaskItem = useCallback((_item) => {
		setEditingItemId(null);
	}, []);
	const handlePressTaskItemLabel = useCallback((item) => {
		setEditingItemId(item.id);
	}, []);
	const handleRemoveItem = useCallback((item) => {
		setData((prevData) => {
			const newData = prevData.filter((i) => i !== item);
			return newData;
		});
	}, []);

	return (
		<AnimatedColorBox flex={1} bg={useColorModeValue('warmGray.50', 'primary.900')} w="full">
			<Masthead title={Message} image={require('../assets/masthead.png')}>
				<NavBar />
			</Masthead>
			<VStack
				flex={1}
				space={1}
				bg={useColorModeValue('warmGray.50', 'primary.900')}
				mt="-20px"
				borderTopLeftRadius="15px"
				borderTopRightRadius="15px"
				pt="20px"
			>
				<TaskList
					data={data}
					onToggleItem={handleToggleTaskItem}
					onChangeSubject={handleChangeTaskItemSubject}
					onFinishEditing={handleFinishEditingTaskItem}
					onPressLabel={handlePressTaskItemLabel}
					onRemoveItem={handleRemoveItem}
					editingItemId={editingItemId}
				/>
			</VStack>
			<Fab
				position="absolute"
				renderInPortal={false}
				size="sm"
				icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
				colorScheme={useColorModeValue('purple', 'purple')}
				bg={useColorModeValue('purple.500', 'purple.400')}
				onPress={() => {
					const id = shortid.generate();
					setData([
						{
							id,
							subject: '',
							done: false
						},
						...data
					]);
					setEditingItemId(id);
				}}
			/>
		</AnimatedColorBox>
	);
}
