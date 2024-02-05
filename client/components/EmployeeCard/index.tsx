import React from "react";

type EmployeeCardProps = {
  id: number;
  firstName: string;
  lastName?: string;
  email: string;
  phoneNumber: string;
  address?: {
    streetAddress?: string;
    city?: string;
  };
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({ id, firstName, lastName, email, phoneNumber, address }) => {
  return (
    <div
      data-testid="card"
      className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white"
      title={`Employee ID: ${id}`}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{`${firstName} ${lastName || ""}`}</div>
        <p className="text-gray-700 text-base">{email}</p>
        <p className="text-gray-700 text-base">{phoneNumber}</p>
        <div className="mt-4">
          <p className="text-gray-700 text-sm">{address?.streetAddress || "No Address"}</p>
          <p className="text-gray-700 text-sm">{address?.city || "No City"}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
