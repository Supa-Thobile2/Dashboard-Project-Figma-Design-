import React from "react";

function ToDo() {
  return (
    <div className="p-4">
      <div className="p-4">
        <div className="flex justify-between items-center border mx-auto w-80">
          <div>To Do (30)</div>
          <div className="flex justify-between items-center">
            <div>+</div>
            <div>...</div>
          </div>
        </div>

        <div>
          <div className="border p-8 border">
            <h1>Implement Login</h1>
            <p>Development</p>
            <p>
              Add forgot password option when login and send email to rest
              password
            </p>
            <div className="flex justify-between items-center">
              <p>30 Nov</p>
              <p>image</p>
            </div>
          </div>
        </div>
        


      </div>

      <div>
        <div>
          {/* image */}
          <h1>Dasboard improvement</h1>
          <p>Design</p>
          <div className="flex justify-between items-center">
            <div>count</div>
            <div>image</div>
          </div>
        </div>
      </div>
      <div>
        {/* image */}
        <h1>Dasboard improvement</h1>
        <p>Design</p>
        <div className="flex justify-between items-center">
          <div>count</div>
          <div>image</div>
        </div>
      </div>
      <div>
        {/* image */}
        <h1>Dasboard improvement</h1>
        <p>Design</p>
        <div className="flex justify-between items-center">
          <div>count</div>
          <div>image</div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
