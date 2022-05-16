import React, { FC, useState, useCallback } from "react";
import { useActions } from "@/hooks/useActions";

import "./styles.scss";
import { Button, Modal } from "antd";
import { UserDeleteOutlined } from "@ant-design/icons";
import { TDeleteButtonProps } from "./types";

export const DeleteButton: FC<TDeleteButtonProps> = ({ id }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { deleteUserfromTable } = useActions();

  const handleDeleteClick = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleConfirm = useCallback(() => {
    if (id) {
      setIsModalVisible(false);
      deleteUserfromTable(id);
    }
  }, [id]);

  const handleConfirmCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <>
      <Button
        htmlType="button"
        onClick={handleDeleteClick}
        icon={<UserDeleteOutlined />}
        danger
      />
      <Modal
        title="Подтверждение удаления"
        visible={isModalVisible}
        onOk={handleConfirm}
        onCancel={handleConfirmCancel}
        cancelText="Отмена"
        okText="Удалить"
        okType="danger"
      >
        <p>Вы уверены, что хотите удалить ... из таблицы?</p>
      </Modal>
    </>
  );
};
