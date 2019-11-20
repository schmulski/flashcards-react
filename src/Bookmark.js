import styled from 'styled-components'

const Bookmark = styled.div`
  border: 20px solid ${props => (props.active ? 'lightgreen' : 'black')};
  border-bottom-color: transparent;
  position: absolute;
  width: 0;
  right: 10px;
  top: 0;
`
export default Bookmark
