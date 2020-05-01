import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";

import { Jutsu } from "react-jutsu";

function App() {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [call, setCall] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    if (room && name) setCall(true);
  };

  return call ? (
    <Jutsu
      roomName={room}
      userName={name}
      width="100%"
      height="100%"
      loadingComponent={<p>loading ...</p>}
    />
  ) : (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">Jitsi Conference</p>
                  <label htmlFor="room" className="grey-text font-weight-light">
                    Your Room
                  </label>
                  <input
                    type="text"
                    id="room"
                    value={room}
                    onChange={e => setRoom(e.target.value)}
                    className="form-control"
                    placeholder="Room"
                  />
                  <br />
                  <label htmlFor="name" className="grey-text font-weight-light">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="form-control"
                  />
                  <div className="text-center py-4 mt-3">
                    <MDBBtn
                      onClick={handleClick}
                      className="btn btn-outline-purple"
                      type="submit"
                    >
                      Join
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default App;
