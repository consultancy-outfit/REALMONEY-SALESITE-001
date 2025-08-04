"use client";

import { ContactCard } from "@/components/cards/contact-card";
import { SecondaryContainer } from "@/components/containers/secondary-container";

const RequestDemo = () => {
  return (
    <SecondaryContainer>
      <ContactCard
        heading="Trust and Security, Unlocked with IdentityGram"
        description="Request a personalised demo to see how our advanced verification solutions enhance operations and build genuine connections"
        extraDescription="Join with more than 1200+ happy customers 😍"
        hasAvatars
        btnText="Request a demo"
      />
    </SecondaryContainer>
  );
};

export default RequestDemo;
