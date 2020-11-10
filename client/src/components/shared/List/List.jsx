import PropTypes from 'prop-types';
import React from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';

import Styles from './List.styles';

const List = ({
  actions,
  data,
  clickableRows,
  onClick,
  handleChangePage,
  listConfig,
  listSize,
  order,
  orderBy,
  page,
  handleSortRequest,
  title,
  totalElt,
  ...props
}) => {

  /**
   *
   * @param field {object}
   * @returns {*}
   */
  function sortedCell(field) {
    return (
      <Styles.ListCell
        key={field.id}
        sortDirection={orderBy === field.id ? order : false}
      >
        <TableSortLabel
          active={orderBy === field.id}
          direction={order}
          onClick={() => handleSortRequest(field.id)}
        >
          {field.label}
        </TableSortLabel>
      </Styles.ListCell>
    );
  }

  function renderListHeader() {
    const headerContent = listConfig.map((field) => {
      if (field.sortable) {
        return sortedCell(field);
      }
      return <Styles.ListCell key={field.id}>{field.label}</Styles.ListCell>;
    });
    if (actions.length > 0) {
      headerContent.push(<Styles.ListCell>Actions</Styles.ListCell>);
    }
    return (
      <Styles.Head>
        <TableRow>{headerContent}</TableRow>
      </Styles.Head>
    );
  }

  /**
   *
   * @param elt {Object}
   * @returns {*}
   */
  function renderData(elt) {
    return (
      <TableRow hover={clickableRows}>
        {listConfig.map((field) => (
          <Styles.ListCell key={field.id} onClick={() => onClick(elt)}>
            {elt[field.id]}
          </Styles.ListCell>
        ))}
        {actions.length > 0 && (
          <Styles.ListCell key={elt.id}>
            {actions.map((action) => action(elt))}
          </Styles.ListCell>
        )}
      </TableRow>
    );
  }

  function renderEmptyRow() {
    let rowSize = listConfig.length;
    if (actions.length > 0) {
      rowSize++;
    }
    return (
      <Styles.EmptyRow>
        <TableCell colSpan={rowSize} />
      </Styles.EmptyRow>
    );
  }

  function renderDataList() {
    return [...Array(listSize).keys()].map((key) => {
      if (data[key]) {
        return renderData(data[key]);
      }
      return renderEmptyRow();
    });
  }

  return (
    <Paper className={`w-100 ${props.className}`}>
      <div className="p-4">
        <Typography variant="h6">{title}</Typography>
        <div>
          <Table className="w-100" aria-labelledby="tableTitle">
            {renderListHeader()}
            <TableBody>{renderDataList()}</TableBody>
          </Table>
        </div>
        <TablePagination
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          component="div"
          count={totalElt}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={handleChangePage}
          page={page}
          rowsPerPage={listSize}
          rowsPerPageOptions={[listSize]}
        />
      </div>
    </Paper>
  );
};

List.defaultProps = {
  actions: [],
  clickableRows: false,
  onClick: null,
  handleChangePage: null,
  order: 'desc',
  orderBy: null,
  handleSortRequest: null,
  title: '',
  className: '',
};

List.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.func),
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  clickableRows: PropTypes.bool,
  onClick: PropTypes.func,
  handleChangePage: PropTypes.func,
  listConfig: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      sortable: PropTypes.bool,
      label: PropTypes.string,
    }),
  ).isRequired,
  listSize: PropTypes.number.isRequired,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  page: PropTypes.number.isRequired,
  handleSortRequest: PropTypes.func,
  title: PropTypes.string,
  totalElt: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default List;
