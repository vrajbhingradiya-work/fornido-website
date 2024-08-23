import * as React from "react";

export default function EmailTemplate({
  clientName,
  clientNumber,
  clientEmailId,
}: any) {
  return (
    <div>
      <h1>Inquiry Raised By, {clientName}!</h1>
      <p>Client Number: {clientNumber}</p>
      <p>Client EmailId: {clientEmailId}</p>
    </div>
  );
}
