import React from 'react';
import { CommentManager } from './components/comment-manager';
import { DeleteButton } from './components/delete-button';

export const columns = () => {
  //...
  const data = [
   //...
    {
      title: 'Комментарий',
      dataIndex: 'managerComment',
      key: 'managerComment',
      width: '12%',
      editable: true,
      render: (managerComment: string, { id }: { id: number }) => (
        <CommentManager managerComment={managerComment} id={id} />
      ),
    },
    {
      title: 'Удалить из таблицы',
      dataIndex: 'id',
      key: 'delete',
      width: '5%',
      align: 'center' as 'center',
      render: (id: number) => <DeleteButton id={id} />,
    },
  ];
  return data;
}
  