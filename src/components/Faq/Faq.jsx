import React from "react";
import { CollapsibleSection } from "../CollapsibleSection/CollapsibleSection";
import s from "./Faq.module.scss";
export default function Faq() {
  return (
    <div className={s.outer}>
      <div className={s.container}>
        <h1 className={s.heading}>Frequently Asked Questions</h1>

        <CollapsibleSection title="Question 1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos
            maxime pariatur eligendi debitis iste officia nam reprehenderit,
            error excepturi expedita perferendis voluptatum nulla itaque atque
            veniam, ex dolor recusandae!
          </p>
        </CollapsibleSection>
        <CollapsibleSection title="Question 2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos
            maxime pariatur eligendi debitis iste officia nam reprehenderit,
            error excepturi expedita perferendis voluptatum nulla itaque atque
            veniam, ex dolor recusandae!
          </p>
        </CollapsibleSection>
        <CollapsibleSection title="Question 3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos
            maxime pariatur eligendi debitis iste officia nam reprehenderit,
            error excepturi expedita perferendis voluptatum nulla itaque atque
            veniam, ex dolor recusandae!
          </p>
        </CollapsibleSection>
        <CollapsibleSection title="Question 4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos
            maxime pariatur eligendi debitis iste officia nam reprehenderit,
            error excepturi expedita perferendis voluptatum nulla itaque atque
            veniam, ex dolor recusandae!
          </p>
        </CollapsibleSection>
      </div>
    </div>
  );
}
