import * as React from "react";

export default function BrochureViewedEmailTemplate({
  clientName,
  clientNumber,
  clientEmailId,
  project,
}) {
  return (
    <div>
      <h1>
        {clientName} just viewed
        {project} brochure!
      </h1>
      <p>Client Name: {clientName}</p>
      <p>Client Number: {clientNumber}</p>
      <p>Client EmailId: {clientEmailId}</p>
      <p>Project : {project}</p>
    </div>
  );
}
