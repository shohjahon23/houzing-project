import styled from "styled-components";

const getType = ({ type }) => {
    switch(type){
        case 'dark': 
            return {
                background: 'transparent',
                border: '1px solid #fff',
                color: '#fff'
            }
        case 'light':
            return {
                background: '#fff',
                border: '1px solid #e6e9ec',
                color: '#0d263b'
            }
        case 'primary':
            return {
                background: '#0061df',
                border: 'none',
                color: '#fff'
            }
        default: 
            return {
                background: '#0061df',
                border: 'none',
                color: '#fff'
            }
    }
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "15px")};
  width: ${({ width }) => (width ? `${width}px` : "130px")};
  height: ${({ height }) => (height ? `${height}px` : "45px")};
  cursor: pointer;
  ${getType}
  :active {
    opacity: 0.7;
  }
`;

export { Container };
