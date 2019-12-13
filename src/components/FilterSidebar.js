import React from 'react';

import UIButton from '../UIComponents/buttons/UIButton';
import UICard from '../UIComponents/containers/UICard';
import UIFormControl from '../UIComponents/form/UIFormControl';
import UISelect from '../UIComponents/inputs/UISelect';

import { CREDIT_HOURS } from '../constants/CreditHours';
import { TERMS } from '../constants/Terms';

const FilterSidebar = () => {
  return (
    <UICard>
      <h4>Search Filters</h4>
      <UIFormControl label="Term">
        <UISelect options={TERMS} placeholder="Fall 2019" />
      </UIFormControl>
      <UIFormControl label="Subject">
        <UISelect placeholder="Computer Science" />
      </UIFormControl>
      <UIFormControl label="Credit Hours">
        <UISelect options={CREDIT_HOURS} placeholder="3 Credit Hours" />
      </UIFormControl>
      <UIButton use="primary">Search</UIButton>
    </UICard>
  );
};

export default FilterSidebar;