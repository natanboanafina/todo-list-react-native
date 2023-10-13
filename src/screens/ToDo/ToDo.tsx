import React, { useContext, useState } from 'react';
import {
  ToastAndroid,
  Keyboard,
  Text,
  Modal,
  View,
  Animated,
} from 'react-native';
import { Wrapper, Title, SafeView, InputWrapper } from './styles';
import { Task } from '../../components/Tasks';
import { TaskButton } from '../../components/TaskButton';
import { Input } from '../../components/Input';
import { Flat } from '../../components/Flat';
import { Warning } from '../../components/Warning';
import { AnimationContext } from '../../context/animation';

export default function ToDo() {
  const [controlledTask, setControlledTask] = useState('');
  const [taskList, setUpdateTaskList] = useState<string[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const { fade, startAnimation, endAnimation } = useContext(AnimationContext);

  const animation = () => {
    startAnimation();
    setTimeout(() => {
      endAnimation();
    }, 2500);
  };

  const handleAdd = () => {
    if (controlledTask.trim()) {
      if (!taskList.includes(controlledTask)) {
        setUpdateTaskList([...taskList, controlledTask]);
        setControlledTask('');
      } else {
        setModalVisible(true);
        animation();
      }
    }
    Keyboard.dismiss();
  };

  const handleRemoveTask = (taskToRemove: string) => {
    setUpdateTaskList(taskList.filter(task => task !== taskToRemove));
  };

  const handleRenderTask = ({ item }: { item: string }) => {
    return <Task item={item} handleRemoveTask={handleRemoveTask} />;
  };

  const titleData = {
    title: 'Adicionar Tarefa',
  };
  return (
    <>
      <SafeView>
        {isModalVisible && (
          <Warning
            animationFade={fade}
            fading={animation}
            text="Essa tarefa já foi adicionada!"
          />
        )}
        <Flat tasks={taskList} renderTask={handleRenderTask} />
        <Wrapper>
          <Title>{titleData.title}</Title>
          <InputWrapper>
            <Input
              setControlledTask={text => setControlledTask(text)}
              controlledTask={controlledTask}
            />
            <TaskButton handleAdd={handleAdd} />
          </InputWrapper>
        </Wrapper>
      </SafeView>
    </>
  );
}
