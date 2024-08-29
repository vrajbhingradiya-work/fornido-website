import * as React from "react";

export default function InquiryEmailTemplate({ clientName, clientNumber }) {
  return (
    <div>
      <h1>Inquiry Raised By, {clientName}!</h1>
      <p>Client Number: {clientNumber}</p>
    </div>
  );
}
