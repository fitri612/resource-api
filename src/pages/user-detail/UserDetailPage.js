import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../config";

export const UserDetailPage = () => {
  const [title, setTitle] = useState();
  const params = useParams();
  useEffect(() => {
    const getTitle = async () => {
      try {
        const { data } = await axios.get(`${API}todos/${params?.id}`);
        console.log(data);
        setTitle(data);
      } catch (err) {
        //
      }
    };
    getTitle();
  });

  return (
    <div className="container" style={{margin: '100px'}}>
      <div className="judul">
        <h1>Detail Pages</h1>
      </div>
      <div
        className="card border-light mb-3"
        style={{
          maxWidth: "50%",
          marginLeft: "320px",
          marginRight: "150px",
          padding: "20px",
          alignItems: "center",
        }}
      >
        <div class="card-title" style={{ fontWeight: "400", fontSize: "20px" }}>
          {title?.id}
        </div>
        <div class="card-text" style={{ marginBottom: "10px" }}>
          Title : {title?.title}
        </div>
        <div class="card-text" style={{ marginBottom: "10px" }}>
          Completed : {title?.completed ? "Yes" : "No"}
        </div>
      </div>
    </div>
  );
};
