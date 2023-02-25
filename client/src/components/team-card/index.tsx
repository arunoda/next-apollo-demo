import React from "react";
import { Employee } from "@Components/entities/employee";
import { AvatarGenerator } from "random-avatar-generator";
import Image from "next/image";

interface TeamCardProps {
  employee: Employee;
}

const TeamCard: React.FC<TeamCardProps> = ({ employee }) => {
  const generator = new AvatarGenerator();
  const { id, firstName, lastName, email, phoneNumber, address } = employee;

  return (
    <li key={id} className="flex flex-col py-6 border items-center">
      <Image
        className="w-2/3 flex-none rounded-2xl object-fill"
        src={generator.generateRandomAvatar()}
        alt="profile"
        width={200}
        height={200}
      />
      <div className="flex flex-col pt-5">
        <h3 className="flex gap-2 text-lg font-bold leading-8 tracking-tight text-gray-900">
          Name:
          <span className="font-normal">
            {firstName} {lastName}
          </span>
        </h3>
        <p className="flex gap-2 text-base leading-7 text-gray-600 font-bold">
          Email: <span className="font-normal">{email}</span>
        </p>
        <p className="flex gap-2 text-base font-bold leading-7 text-gray-600">
          Phone Number: <span className="font-normal">{phoneNumber}</span>
        </p>
        <div>
          <p className=" text-base leading-7 text-gray-600 font-bold">
            Address:
          </p>
          <p className=" text-base leading-7 text-gray-600">
            {address.firstLine}
          </p>
          <p className=" text-base leading-7 text-gray-600">{address.street}</p>
          <p className=" text-base leading-7 text-gray-600">{address.city}</p>
        </div>
      </div>
    </li>
  );
};

export default TeamCard;
