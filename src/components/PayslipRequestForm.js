// src/PayslipRequestForm.js
import React, { useState } from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import './PayslipRequestForm.css';


const PayslipRequestForm = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeID, setEmployeeID] = useState('');
  const [basicPay, setBasicPay] = useState('');
  const [allowances, setAllowances] = useState([{ name: '', amount: '' }]);
  const [deductions, setDeductions] = useState([{ name: '', amount: '' }]);
  const [overtimeRate, setOvertimeRate] = useState('');

  const handleAllowanceChange = (index, e) => {
    const values = [...allowances];
    values[index][e.target.name] = e.target.value;
    setAllowances(values);
  };

  const handleDeductionChange = (index, e) => {
    const values = [...deductions];
    values[index][e.target.name] = e.target.value;
    setDeductions(values);
  };

  const addAllowance = () => {
    setAllowances([...allowances, { name: '', amount: '' }]);
  };

  const addDeduction = () => {
    setDeductions([...deductions, { name: '', amount: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      employeeName,
      employeeID,
      basicPay,
      allowances,
      deductions,
      overtimeRate,
    });
  };

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <h3>Employee Payslip Request</h3>

        {/* Employee Details Section */}
        <Row>
          <Col md={6}>
            <Form.Group controlId="employeeName">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter employee name"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="employeeID">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter employee ID"
                value={employeeID}
                onChange={(e) => setEmployeeID(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Salary Details Section */}
        <h4>Salary Details</h4>

        <Form.Group controlId="basicPay">
          <Form.Label>Basic Pay</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter basic pay"
            value={basicPay}
            onChange={(e) => setBasicPay(e.target.value)}
          />
        </Form.Group>

        {/* Allowances Section */}
        <h5>Allowances</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {allowances.map((allowance, index) => (
              <tr key={index}>
                <td>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Allowance name"
                    value={allowance.name}
                    onChange={(e) => handleAllowanceChange(index, e)}
                  />
                </td>
                <td>
                  <Form.Control
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={allowance.amount}
                    onChange={(e) => handleAllowanceChange(index, e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="secondary" onClick={addAllowance}>
          Add Allowance
        </Button>

        {/* Deductions Section */}
        <h5>Deductions</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {deductions.map((deduction, index) => (
              <tr key={index}>
                <td>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Deduction name"
                    value={deduction.name}
                    onChange={(e) => handleDeductionChange(index, e)}
                  />
                </td>
                <td>
                  <Form.Control
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={deduction.amount}
                    onChange={(e) => handleDeductionChange(index, e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="secondary" onClick={addDeduction}>
          Add Deduction
        </Button>

        {/* Overtime Section */}
        <Form.Group controlId="overtimeRate">
          <Form.Label>Default Overtime Rate (per hour)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter overtime rate"
            value={overtimeRate}
            onChange={(e) => setOvertimeRate(e.target.value)}
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Submit Request
        </Button>
      </Form>
    </div>
  );
};

export default PayslipRequestForm;
