import styled from "styled-components";
import { theme } from "../Theme.styled";
export const TextGood = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #195905;
`;

export const TextNeutral = styled.p`
  font-size: ${theme.fonts.fontSize16};
  font-weight: ${theme.fonts.fontSeightBold};
  color: #e5b000;
`;

export const TextBad = styled.p`
  font-size: ${theme.fonts.fontSize16};
  font-weight: ${theme.fonts.fontSeightBold};
  color: #c90016;
`;

export const TextTotal = styled.p`
  font-size: ${theme.fonts.fontSize16};
  font-weight: ${theme.fonts.fontSeightBold};
  color: #001e98;
`;

export const StatText = styled.p`
  font-size: ${theme.fonts.fontSize16};
  font-weight: ${theme.fonts.fontSeightBold};
  color: #7100ce;
`;
