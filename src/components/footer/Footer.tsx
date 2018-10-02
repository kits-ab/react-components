import * as React from "react"
import styled from "styled-components"

import { colors, spacing } from "../../styles/constants"
import * as types from "../../types"
import { cssVar } from "../../utils/cssUtils"
import { Contact } from "../contact/Contact"

const StyledFooter = styled.footer`
  background-color: ${colors.background2};
  background-color: var(--background2);
  overflow: hidden;
  padding: ${spacing.large}px;
  position: relative;

  .footer-image {
    height: 700px;
    left: -504px;
    pointer-events: none;
    position: absolute;
    top: -358px;
    width: 469px;
  }

  .footer-container {
    display: inline-block;
    float: right;
    position: relative;
  }

  .footer-wrapper {
    margin: 0 auto;
    max-width: 620px;
  }
`

export interface FooterProps extends types.BaseProps {
  /** The contact information to show. */
  info: types.Contact
}

/**
 * Footer is used to show a footer with contact information.
 */
export class Footer extends React.PureComponent<FooterProps> {
  render() {
    const { info, ...restProps } = this.props
    return (
      <StyledFooter {...restProps}>
        <div className="footer-wrapper">
          <div className="footer-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="footer-image"
              fill={cssVar("--background1") || colors.background1}
              viewBox="0 0 67 100"
              {...restProps}
            >
              <path d="M36.9116972,87.4568966 C37.4713303,88.4321839 38.1938073,89.2304598 39.0779817,89.8505747 C39.9627294,90.4712644 40.9805046,90.9293103 42.129587,91.2241379 C43.279243,91.5206897 44.47305,91.6678161 45.711583,91.6678161 C46.595757,91.6678161 47.524656,91.5649425 48.497133,91.3574713 C49.470757,91.1511494 50.354931,90.8252874 51.150803,90.3821839 C51.946101,89.9390805 52.609518,89.3488506 53.140482,88.6097701 C53.670872,87.8712644 53.936353,86.9402299 53.936353,85.8166667 C53.936353,83.9270115 52.682913,82.5086207 50.178326,81.562069 C47.670872,80.6178161 44.177752,79.6712644 39.6972477,78.7258621 C37.8692661,78.3132184 36.0854358,77.8258621 34.3469037,77.2632184 C32.6072248,76.7017241 31.0590596,75.9637931 29.703555,75.0471264 C28.3463303,74.1321839 27.2557339,72.9793103 26.4317661,71.5896552 C25.6055046,70.2022989 25.1932339,68.5022989 25.1932339,66.4931034 C25.1932339,63.5385057 25.7677752,61.116092 26.9174312,59.2241379 C28.0676606,57.3333333 29.584289,55.8413793 31.4724771,54.7477011 C33.358945,53.6545977 35.4816514,52.8862069 37.8400229,52.4425287 C40.1978211,51.9994253 42.615826,51.7781609 45.092317,51.7781609 C47.568234,51.7781609 49.970757,52.0149425 52.300459,52.4873563 C54.62844,52.9609195 56.707569,53.758046 58.53555,54.8810345 C60.361812,56.004023 61.880734,57.4954023 63.090023,59.3568966 C64.297592,61.2183908 65.065367,64.5431034 65.301606,67.3793103 L53.212729,67.3793103 C53.071101,64.9931034 52.450115,62.5724138 50.575688,61.4844828 C48.966743,60.5505747 46.978784,60.1994253 44.738532,60.1994253 C44.030963,60.1994253 43.263761,60.2431034 42.43922,60.3321839 C41.6123853,60.4206897 40.8606651,60.6132184 40.1834862,60.908046 C39.5057339,61.2051724 38.9306193,61.6327586 38.459289,62.1936782 C37.9862385,62.7557471 37.7517202,63.5097701 37.7517202,64.454023 C37.7517202,65.5775862 38.1634174,66.4931034 38.9896789,67.2022989 C39.815367,67.9114943 40.8916284,68.4873563 42.218463,68.9298851 C43.544151,69.3735632 45.061927,69.7724138 46.772362,70.1275862 C48.482225,70.4816092 50.222477,70.8666667 51.990826,71.2798851 C53.817087,71.6936782 55.602064,72.1965517 57.34117,72.7862069 C59.079702,73.3781609 60.627867,74.1603448 61.984518,75.1356322 C63.340023,76.1109195 64.430046,77.3229885 65.256307,78.7701149 C66.081995,80.2189655 66.494839,82.0051724 66.494839,84.1327586 C66.494839,87.1471264 65.889335,89.6735632 64.681766,91.712069 C63.472477,93.7505747 61.896216,95.3902299 59.950688,96.6316092 C58.004587,97.8729885 55.77867,98.7448276 53.273509,99.2465517 C50.766055,99.7482759 48.217317,100 45.622706,100 C42.96961,100 40.3738532,99.7344828 37.8400229,99.2028736 C35.3044725,98.6706897 33.0493119,97.783908 31.0739679,96.5431034 C29.0980505,95.3017241 27.4770642,93.662069 26.2098624,91.6235632 C24.9415138,89.5850575 24.2494266,87.0293103 24.1318807,83.9557471 L36.0711009,83.9557471 C36.0711009,85.3155172 36.350344,86.4816092 36.9116972,87.4568966" />
              <path d="M31.3646789,18.7902299 L31.3646789,27.6477011 L21.690367,27.6477011 L21.690367,51.5155172 C21.690367,53.754023 22.0625,55.2454023 22.8067661,55.9908046 C23.5510321,56.7367816 25.0389908,57.1103448 27.271789,57.1103448 C28.016055,57.1103448 28.7276376,57.0793103 29.4111239,57.0166667 C30.0928899,56.9557471 30.7436927,56.8626437 31.3646789,56.7367816 L31.3646789,66.9936782 C30.2482798,67.1804598 29.0068807,67.304023 27.643922,67.3666667 C26.2786697,67.4275862 24.9461009,67.4603448 23.643922,67.4603448 C21.5974771,67.4603448 19.6582569,67.3206897 17.8297018,67.0408046 C16,66.7603448 14.3881881,66.2172414 12.9931193,65.4091954 C11.5974771,64.6022989 10.4954128,63.4511494 9.690367,61.9591954 C8.8841743,60.4672414 8.481078,58.5091954 8.481078,56.0850575 L8.481078,27.6477011 L0.481078,27.6477011 L0.481078,18.7902299 L8.481078,18.7902299 L8.481078,0.423563218 L21.690367,0.423563218 L21.690367,18.7902299 L31.3646789,18.7902299" />
            </svg>
            <Contact info={info} type={types.ContactType.Company} />
          </div>
        </div>
      </StyledFooter>
    )
  }
}
