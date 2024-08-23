import * as React from "react";

export default function InquiryEmailTemplate({
  clientName,
  clientNumber,
  clientEmailId,
  clientMessage,
}: any) {
  return (
    <div>
      <h1>Inquiry Raised By, {clientName}!</h1>
      <p>Client Number: {clientNumber}</p>
    </div>
  );
}
