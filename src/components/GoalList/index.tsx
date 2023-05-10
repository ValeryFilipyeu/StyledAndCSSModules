import React from "react";

import GoalItem from "../GoalItem";

import "./index.css";

type GoalListProps = {
  items: {
    id: string;
    text: string;
  }[];
  onDeleteItem: (goalId: string) => void;
};

const GoalList: React.FC<GoalListProps> = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <GoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </GoalItem>
      ))}
    </ul>
  );
};

export default GoalList;
