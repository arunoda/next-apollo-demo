import React from "react";
import { Employee } from "../../entities/employee";
import { AvatarGenerator } from "random-avatar-generator";
import Image from "next/image";

interface TeamCardProps {
  employee: Employee;
}

const TeamCard: React.FC<TeamCardProps> = ({ employee }) => {
  const generator = new AvatarGenerator();
  const { id, firstName, lastName, email, phoneNumber, address } = employee;

  return (
    <li
      key={id}
      className="flex flex-col py-6 border items-center w-full truncate overflow-hidden"
      data-testid="team-card-container"
    >
      <Image
        className="w-2/3 flex-none rounded-2xl object-fill"
        src={generator.generateRandomAvatar()}
        alt="profile"
        width={200}
        height={200}
        data-testid="team-card-image"
      />
      <div className="flex flex-col p-5">
        <h3 className="flex gap-2 text-md font-bold leading-8 tracking-tight text-gray-900">
          Name:
          <span className="font-normal" data-testid="team-card-full-name">
            {firstName} {lastName}
          </span>
        </h3>
        <p className="flex gap-2 text-base leading-7 text-gray-600 font-bold">
          Email:{" "}
          <span className="font-normal" data-testid="team-card-email">
            {email}
          </span>
        </p>
        <p className="flex gap-2 text-base font-bold leading-7 text-gray-600">
          Phone Number:{" "}
          <span className="font-normal" data-testid="team-card-phone-number">
            {phoneNumber}
          </span>
        </p>
        <div>
          <p className=" text-base leading-7 text-gray-600 font-bold">
            Address:
          </p>
          <p
            className=" text-base leading-7 text-gray-600"
            data-testid="team-card-address-first-line"
          >
            {address.firstLine}
          </p>
          <p
            className=" text-base leading-7 text-gray-600"
            data-testid="team-card-address-street"
          >
            {address.street}
          </p>
          <p
            className=" text-base leading-7 text-gray-600"
            data-testid="team-card-address-city"
          >
            {address.city}
          </p>
        </div>
      </div>
    </li>
  );
};

export default TeamCard;
