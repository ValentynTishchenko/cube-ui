import React, { Fragment } from 'react';
import { TableFilterContainer } from './TableFilter.styled';
import { TableFilterProps, filterOption } from './TableFilter.types';

class TableFilter extends React.PureComponent<TableFilterProps> {
  private onClick = e => {
    const { onClick } = this.props;
    const target = e.target;
    const value: string = target.dataset.value;

    if (!target.classList.contains('active') && value) {
      const value: string = target.dataset.value;

      onClick(value);
    }
  };

  private renderFilterOptions = () => {
    const { filterOptions } = this.props;

    return filterOptions.map(({ label, isActive, value }: filterOption, key) => (
      <Fragment key={key}>
        <li
          data-value={value}
          className={isActive ? 'active' : ''}
          onClick={this.onClick}
        >
          {label}
        </li>
      </Fragment>));
  };

  render() {
    return (
      <TableFilterContainer>
        {this.props.children}
        {this.renderFilterOptions()}
      </TableFilterContainer>
    );
  }
}

export default TableFilter;