import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import {Provider} from 'react-redux'
import SmurfList from './SmurfList'

test("form submits correctly to the smurflist",async () => {
    const wrapper = render(<App/>)

    const heading = wrapper.queryByText(/add new smurf/i)


    // fireEvent.change(screen.getByLabelText(/name:/i),{target:{value:'Slappy'}});
    // fireEvent.change(screen.getByLabelText(/age:/i),{target:{value:'250'}});
    // fireEvent.change(screen.getByLabelText(/height:/i),{target:{value:'7cm'}});

    // const button = screen.queryByText('Submit')

    // fireEvent.click(button)

    // expect(await "Slappy").toBeInTheDocument()

})

