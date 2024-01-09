import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Redirection from "../../components/Redirection";

export default function AdminArtManager() {
  const loaderdata = useLoaderData();
  const [postArtist, setPostArtist] = useState({
    name: "",
    description: "",
  });

  const handleInput = (e) => {
    setPostArtist({ ...postArtist, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5021/artist`, postArtist)
      .then((res) => console.warn(res))
      .catch((err) => console.error(err));
  };

  const [postArt, setPostArt] = useState({
    title: "",
    image: "",
    dimension: "",
    creation_place: "",
  });

  const handleInputArt = (e) => {
    setPostArt({ ...postArt, [e.target.name]: e.target.value });
  };

  const handleSubmitArt = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5021/artwork`, postArt)
      .then((res) => console.warn(res))
      .catch((err) => console.error(err));
  };

  return (
    <MDBRow>
      <h1>Artistes</h1>
      {loaderdata.artistCollection.map((artist) => (
        <MDBCol xl={4} lg={6} className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">{artist.name}</p>
                  <p className="text-muted mb-0">{artist.description}</p>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}

      {/* <MDBCol xl={4} lg={6} className='mb-4'>
      <MDBCard>
        <MDBCardBody>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/6.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Alex Ray</p>
              <p className='text-muted mb-0'>alex.ray@gmail.com</p>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol xl={4} lg={6} className='mb-4'>
      <MDBCard>
        <MDBCardBody>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/7.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Kate Hunington</p>
              <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol xl={4} lg={6} className='mb-4'>
      <MDBCard>
        <MDBCardBody>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/9.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Soraya Letto</p>
              <p className='text-muted mb-0'>soraya.letto@gmail.com</p>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol xl={4} lg={6} className='mb-4'>
      <MDBCard>
        <MDBCardBody>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/11.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Zeynep Dudley</p>
              <p className='text-muted mb-0'>zeynep.dudley@gmail.com</p>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol xl={4} lg={6} className='mb-4'>
      <MDBCard>
        <MDBCardBody>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/15.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Ayat Black</p>
              <p className='text-muted mb-0'>ayat.black@gmail.com</p>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol> */}

      <form className="user-form">
        <h3>Ajouter un artiste</h3>
        <MDBInput
          className="mb-4"
          onChange={handleInput}
          name="name"
          type="text"
          label="Artiste"
        />
        <MDBInput
          className="mb-4"
          onChange={handleInput}
          name="description"
          type="text"
          label="Biographie"
        />
        <MDBBtn type="submit" className="mb-4" block>
          Ajouter une image
        </MDBBtn>
        <MDBBtn type="submit" className="mb-4" onClick={handleSubmit} block>
          Valider
        </MDBBtn>

        <h1>Oeuvres</h1>
        <MDBCol xl={4} lg={6} className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">John Doe</p>
                  <p className="text-muted mb-0">john.doe@gmail.com</p>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl={4} lg={6} className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Alex Ray</p>
                  <p className="text-muted mb-0">alex.ray@gmail.com</p>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl={4} lg={6} className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Kate Hunington</p>
                  <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl={4} lg={6} className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/9.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Soraya Letto</p>
                  <p className="text-muted mb-0">soraya.letto@gmail.com</p>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl={4} lg={6} className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/11.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Zeynep Dudley</p>
                  <p className="text-muted mb-0">zeynep.dudley@gmail.com</p>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl={4} lg={6} className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">Ayat Black</p>
                  <p className="text-muted mb-0">ayat.black@gmail.com</p>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <h3>Ajouter une oeuvre</h3>
        <MDBInput
          className="mb-4"
          onChange={handleInputArt}
          type="artName"
          name="title"
          id="artName"
          label="Titre"
        />
        <MDBInput
          className="mb-4"
          onChange={handleInputArt}
          type="artistArt"
          name="artist_id"
          id="artistArt"
          label="Choix de l'artiste"
        />
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput
              id="Taille"
              onChange={handleInputArt}
              name="dimension"
              label="Taille ex : 100x200"
            />
          </MDBCol>
        </MDBRow>
        <MDBInput
          className="mb-4"
          onChange={handleInputArt}
          type="createlocation"
          name="creation_place"
          id="createLocation"
          label="Lieux de création"
        />
        <MDBInput
          className="mb-4"
          onChange={handleInputArt}
          type="createlocation"
          name="image"
          id="createLocation"
          label="image"
        />
        <MDBBtn type="submit" className="mb-4" block>
          Ajouter une image
        </MDBBtn>
        <MDBBtn type="submit" className="mb-4" onClick={handleSubmitArt} block>
          Valider
        </MDBBtn>

        <Redirection />
      </form>
    </MDBRow>
  );
}
