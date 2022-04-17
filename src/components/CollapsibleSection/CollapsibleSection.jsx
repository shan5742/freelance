import React, { useState } from "react";
import s from "./CollapsibleSection.module.scss";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export const CollapsibleSection = ({
  title,
  startExpanded,
  children,
  icon: Icon,
}) => {
  const [expanded, setExpanded] = useState(startExpanded);
  return (
    <div className={s.collapsibleSection}>
      <div
        className={s.collapsibleTitleContainer}
        onClick={() => setExpanded(!expanded)}
      >
        <h4 className={s.collapsibleTitle}>
          {Icon && <Icon />}
          {title}
        </h4>
        {expanded ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {expanded && children}
    </div>
  );
};
