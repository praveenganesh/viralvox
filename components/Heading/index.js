import styled from 'styled-components';
import { GetMarginPadding, GetFontProps, GetBoxsizing, GetHiddenProps } from '../CommonProps';

const types = {
  large: {
    color: 'black',
    fontSize: '2rem',
    fontWeight: '800',
    margin: '0px'
  },
  medium: {
    color: 'black',
    fontSize: '1.3rem',
    fontWeight: '800',
    margin: '0px'
  },
  mediumGray: {
    color: 'Gray',
    fontSize: '1.3rem',
    fontWeight: '800',
    margin: '0px'
  },
  smallGray: {
    color: '#b1b1b1',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    margin: '0px',
    lineHeight: '1.5rem'
  }
};

const Heading = styled.p`
  float: ${props => props.float};
  line-height: 3.5rem;
  ${props => props.display && { display: props.display }}
  ${props => props.textDecoration && { textDecoration: props.textDecoration }}

  ${props => types[props.type]};

  ${props => GetFontProps(props)}
  ${props => GetMarginPadding(props)}
  ${props => GetBoxsizing(props)}
  ${props => GetHiddenProps(props)}
  ${props => props.color && { color: props.color }}
`;

Heading.defaultProps = {
  type: 'default',
  color: 'rgba(0, 0, 0, 0.6)',
  fontSize: '1em',
  ta: 'left',
  fontFamily: 'os',
  va: 'middle',
  float: 'none'
};

export default Heading;
