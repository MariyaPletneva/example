import React, { useState, useCallback } from "react";
import { Input, Typography } from "antd";
import { useActions } from "@/hooks/useActions";
import { CommentManagerProps } from "./types";

const { Paragraph } = Typography;
const { TextArea } = Input;

export const CommentManager = ({ managerComment, id }: CommentManagerProps) => {
  const [valueComment, setValueComment] = useState(managerComment || "");
  const [editing, setEditing] = useState(false);
  const { putComment } = useActions();
  const maxLengthInput = 50;

  const changeHandler = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setValueComment(e.target.value);
    },
    []
  );

  const focusHandler = useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement>) => {
      const { length } = e.currentTarget.value;
      e.currentTarget.setSelectionRange(length, length);
    },
    []
  );

  const saveComment = useCallback(() => {
    putComment(valueComment, id);
    setEditing(false);
  }, [valueComment, id]);

  const changeEditing = useCallback(() => {
    setEditing(true);
  }, []);

  if (!editing)
    return (
      <Paragraph
        ellipsis={{
          rows: 3,
          symbol: "...",
        }}
        onClick={changeEditing}
        style={{ marginBottom: 0, height: "100%", cursor: "pointer" }}
      >
        {valueComment}
      </Paragraph>
    );
  if (valueComment.length < maxLengthInput) {
    return (
      <Input
        autoFocus
        value={valueComment}
        onPressEnter={saveComment}
        onChange={changeHandler}
        onBlur={saveComment}
        size="small"
      />
    );
  }
  return (
    <TextArea
      autoFocus
      value={valueComment}
      onPressEnter={saveComment}
      onChange={changeHandler}
      onBlur={saveComment}
      autoSize={{ maxRows: 5 }}
      onFocus={focusHandler}
    />
  );
};
