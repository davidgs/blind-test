import React from "react";
import GetSelectContents from "./SelectContents";
import MyFancyComponent from "./Maps";

const h2Style = {
  textAlign: 'center',

};
class MainContent extends React.Component {

  render() {
    return (
      <div className="main-content">
        <div className="row">
          <div className=" col-lg-6">
            <h2 style={h2Style}>
              Drivers
            </h2>
          </div>
          <div className="col-lg-6">
            <h2 style={h2Style}>
              Attendees
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div id="drivers-select">
              <GetSelectContents name="Drivers" />
            </div>
          </div>
          <div className="col-lg-6">
            <div id="attendees-select">
              <GetSelectContents name="Attendees" />
            </div>
          </div>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="col-lg-6">
            <h3>add Button Here</h3>
          </div>
          <div className="col-lg-6">
            <h3>Add Button Here</h3>
          </div>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <MyFancyComponent />
        </div>
        <div className='row'>
          <div className='col-sm-2'>&nbsp;</div>
          <div className='col-sm-8'>
            <h2 style={h2Style}>Available Drivers</h2>
          </div>
          <div className='col-sm-2'>&nbsp;</div>
        </div>
        <div className='row'>
          <div className='col-lg-12' id='selectedDrivers'></div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>&nbsp;</div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>&nbsp;</div>
          <div className='col-sm-4'>
            <h2 style={h2Style}>Attendees</h2>
          </div>
          <div className='col-sm-4'>&nbsp;</div>
        </div>
        <div className='row'>
          <div className='col-sm-1'>&nbsp;</div>
          <div className='col-sm-10' id='selectedAttendees'>
            <div className='col-sm-1'>&nbsp;</div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>&nbsp;</div>
          </div>
          <div className='row'>
            <div className='col-sm-12' id='driversRoutes'>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

        export default MainContent;