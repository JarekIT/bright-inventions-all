import React, { memo } from "react";

interface FilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <React.Fragment>
      <h4>MAP FILTER</h4>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </React.Fragment>
  );
};

export default memo(Filter);
