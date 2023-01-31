
import Employees from "./Employees";
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Employees', () => {
    it('should  render the Employee Details heading', () => {
        render(

            <Employees
                employees={[
                    { name: "XYZ", address: "ABCD", phone: "012345", email: "xyz@gmail" },
                ]}
            />

        );
        waitFor(() => {
            expect(screen.getByText('Employee Details')).toBeInTheDocument();
        })
    });
    it('check for address and Phone Labels', () => {
        render(

            <Employees
                employees={[
                    { name: "XYZ", address: "ABCD", phone: "012345", email: "xyz@gmail" },
                ]}
            />

        );

        waitFor(() => {
            expect(screen.getByText('Address:')).toBeInTheDocument();
            expect(screen.getByText('Phone No:')).toBeInTheDocument();
        })
    });
    it('Render the Name, Address and Phone Number', () => {
        render(

            <Employees
                employees={[
                    { name: "XYZ", address: "ABCD", phone: "012345", email: "xyz@gmail" },
                ]}
            />

        );
        waitFor(() => {
            expect(screen.getByText('XYZ')).toBeInTheDocument();
            expect(screen.getByText('ABCD')).toBeInTheDocument();
            expect(screen.getByText('012345')).toBeInTheDocument();
        })
    });
    it('Should not render the Email', () => {
        render(

            <Employees
                employees={[
                    { name: "XYZ", address: "ABCD", phone: "012345", email: "xyz@gmail" },
                ]}
            />

        );
        waitFor(() => {
            expect(screen.getByText('xyz@gmail')).not.toBeInTheDocument();
        })
    });
})