import React from "react";

import "./index.css";

type CourseGoalItemProps = {
  id: string;
  onDelete: (id: string) => void;
  children: React.ReactNode;
};

const CourseGoalItem: React.FC<CourseGoalItemProps> = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;