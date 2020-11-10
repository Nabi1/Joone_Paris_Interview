import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

const ListWrapper = styled.div`
  width: 100%;
  margintop: 16px;
  fontsize: 30;
`;

const ListCell = styled(TableCell)`
  font-size: 11px;
  text-align: center;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
`;

const Head = styled(TableHead)`
  & .MuiTableCell-head {
    text-align: center;
    font-size: 1.1em;
  }
`;

const EmptyRow = styled(TableRow)`
  height: 49px;
`;

const Styles = {
  EmptyRow,
  ListCell,
  ListWrapper,
  Head,
};

export default Styles;
