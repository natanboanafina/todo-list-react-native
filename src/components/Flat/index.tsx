import React from 'react';
import { ListRenderItem } from 'react-native';
import { CustomFlatList } from './styles';

type RenderTask = ({ item }: { item: string }) => React.ReactNode;

interface IFlat {
  tasks: string[];
  renderTask: RenderTask;
}

export const Flat: React.FC<IFlat> = ({ tasks, renderTask }) => {
  const renderItem: ListRenderItem<string> = ({ item }) => {
    return <>{renderTask({ item })}</>;
  };

  return (
    <>
      <CustomFlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={renderItem}
      />
    </>
  );
};
