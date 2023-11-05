import styled from "styled-components";

export const AgreementText = styled.p`
  color: #BAB7D4;
  font-family: Poppins;
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  color: #FFF;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.268px;
  border-radius: 10px;
  background: #5E54A4;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  margin-top: 50px;
  width: 260px;
  height: 40px;
`;

export const Card = styled.div`
  width: 375px;
  background: #FF7979;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Description = styled.p`
  color: #FFF;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #DEDEDE;
  background: #FFF;
  margin-top: 10px;
  padding: 0 10px;
  border-color: red;
`;

export const Inputs = styled.form`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin-top: 50px;
`;

export const SubmitButton = styled.button`
  border-radius: 5px;
  background: #38CC8B;
  width: 100%;
  height: 40px;
  cursor: pointer;
  margin-top: 20px;
`;

export const Title = styled.h1`
  color: #FFF;
  font-family: Poppins;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
