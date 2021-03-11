import React from 'react';
import { Table, TH, TD, TR } from './Table.styles';
import { Section } from '../../common/Section';
import { RootState } from '../../redux/types/root.state';
import { useSelector } from 'react-redux';

interface TableProps {}

export const Recruits: React.FC<TableProps> = () => {
    const recruits = useSelector((state: RootState) => state.recruits);
    return (
        <Section>
            {recruits.length ? (
                <Table>
                    <thead>
                        <TR>
                            <TH>ID</TH>
                            <TH>Full name</TH>
                            <TH>Phone</TH>
                            <TH>Email</TH>
                            <TH>Age</TH>
                            <TH>Experience</TH>
                            <TH>Yearly Income</TH>
                            <TH>Has children</TH>
                            <TH>License states</TH>
                            <TH>Expiration date</TH>
                            <TH>License number</TH>
                            <TH>Duplicate with</TH>
                        </TR>
                    </thead>
                    <tbody>
                        {recruits.map((recruit) => {
                            const licenseStates: string[] = Array.isArray(recruit.licenseStates.value)
                                ? recruit.licenseStates.value
                                : [];
                            return (
                                <TR key={recruit.id}>
                                    <TD correct={true}>{recruit.id + 1}</TD>
                                    <TD correct={true}>{recruit.fullName}</TD>
                                    <TD correct={recruit.phoneNumber.cell.cellState}>
                                        {recruit.phoneNumber.cell.value}
                                    </TD>
                                    <TD correct={recruit.email.cell.cellState}>{recruit.email.cell.value}</TD>
                                    <TD correct={recruit.age.cellState}>{recruit.age.value}</TD>
                                    <TD correct={recruit.expirience.cellState}>{recruit.expirience.value}</TD>
                                    <TD correct={recruit.yearlyIncome.cellState}>{recruit.yearlyIncome.value}</TD>
                                    <TD correct={true}>{recruit.hasChildren.value}</TD>
                                    <TD correct={recruit.licenseStates.cellState}>
                                        {licenseStates.map(
                                            (licenseState, i) =>
                                                licenseState + (i === licenseStates.length - 1 ? '' : ', '),
                                        )}
                                    </TD>
                                    <TD correct={recruit.expirationDate.cellState}>{recruit.expirationDate.value}</TD>
                                    <TD correct={recruit.licenseNumber.cellState}>{recruit.licenseNumber.value}</TD>
                                    <TD correct={true}>
                                        {recruit.duplication
                                            ? recruit.duplication.map((duplicate, i) => {
                                                  return (
                                                      (duplicate + 1).toString() +
                                                      (i === recruit.duplication.length - 1 ? '' : ', ')
                                                  );
                                              })
                                            : null}
                                    </TD>
                                </TR>
                            );
                        })}
                    </tbody>
                </Table>
            ) : null}
        </Section>
    );
};
