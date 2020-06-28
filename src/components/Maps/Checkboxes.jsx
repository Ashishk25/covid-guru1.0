import React from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const Checkboxes = (props) => {
        return (
                <RadioGroup onChange={props.callback} verticle="true">
                    <RadioButton value="pharmacy"  rootColor="black">
                        Medical store
                    </RadioButton>
                    <RadioButton value="department_store" rootColor="black">
                        General store
                    </RadioButton>
                    <RadioButton value="bakery"  rootColor="black">
                        bakery
                    </RadioButton>
                    <RadioButton value="hardware_store"  rootColor="black">
                        Hardware store
                    </RadioButton>
                    <RadioButton value="veterinary_care"  rootColor="black">
                        Veterinary 
                    </RadioButton>
                </RadioGroup>
        );
    
}
export default Checkboxes;