import React from "react";
import { CollapsibleSection } from "../CollapsibleSection/CollapsibleSection";
import s from "./Faq.module.scss";
export default function Faq() {
  return (
    <div className={s.outer}>
      <div className={s.container}>
        <h1 className={s.heading}>Frequently Asked Questions</h1>

        <CollapsibleSection title="Do you charge per hour or per project?">
          <p>
            We are happy to do either, but honestly per project works better for
            everyone involved. You know the exact price upfront and we can
            concentrate on creating something amazing without worrying about
            counting the hours.
          </p>
        </CollapsibleSection>
        <CollapsibleSection title="How frequently will we keep in touch?">
          <p>
            We promised you an awesome relationship and we meant it. That could
            mean a weekly check in via email or a call each day. If we need
            anything from you we will reach out, but are always to chat and let
            you know where we are with the project if it helps.
          </p>
        </CollapsibleSection>
        <CollapsibleSection title="How big is your team?">
          <p>
            At our core we are a team of two. Honestly we work best that way, we
            have cultivated a strong relationship over the years and obviously a
            smaller team means more cost effective for you. Should your project
            require a little more we can discuss this and we do have a few hand
            selected people we work with as an addition to the regular team when
            needed.
          </p>
        </CollapsibleSection>
        <CollapsibleSection title="What if I am not happy with the final result?">
          <p>
            Well, we are pretty confident that won't happen. Our great
            communication from beginning to end, means that both of us are going
            to be super clear on what to expect. Of course at any point if you
            feel like things are not going the right way then speak up and we
            will rectify it as soon as we can.
          </p>
        </CollapsibleSection>
        <CollapsibleSection title="I have more questions!">
          <p>
            No problem, just fire us a message via the contact form below and we
            will get back to you ASAP.
          </p>
        </CollapsibleSection>
      </div>
    </div>
  );
}
