/**
 * @jest-environment jsdom
 */
import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import UsersTableWithSearch, { query } from "./UsersTableWithSearch";
import { MockedProvider } from "@apollo/client/testing";
import { user } from "./Types";

test("<UsersTableWithSearch/>", async () => {
    const usersList: Array<user> = [];
    for (let i = 0; i < 50; i++) {
        usersList.push({
            address: "address",
            email: "email",
            name: "name" + i,
            phone: "phone",
        });
    }
    render(
        <MockedProvider
            mocks={[
                {
                    request: {
                        query,
                        variables: {},
                    },
                    result: {
                        data: {
                            users: usersList,
                        },
                    },
                },
            ]}
        >
            <UsersTableWithSearch />
        </MockedProvider>,
    );
    expect(await screen.getByText("loading...")).toBeDefined();

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(await screen.findAllByText("address")).toHaveLength(20);

    act(() => {
        fireEvent.change(screen.getByPlaceholderText("search user"), {
            target: { value: "name22" },
        });
    });
    expect(await screen.findAllByText("name22")).toHaveLength(1);
    expect(await screen.findByDisplayValue("name22")).toBeDefined();
});
