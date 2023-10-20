import React, { useEffect, useState } from "react";

function Branch({branch}) {
   const {image_url, branch_manager, short_description, branch_name} = branch
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={image_url}
            className="h-52 w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{branch_manager}, <small>{branch_name}</small></h2>
          <p>{short_description}</p>
        </div>
      </div>
    </div>
  );
}

export default Branch;
