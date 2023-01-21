import React from "react";

function Report({ setReport }) {
  return (
    <div className="report-wrapper">
      <form>
        <div className="close btn">
          <i onClick={() => setReport(false)}  class="fa-solid fa-square-xmark"></i>
        </div>
        <select name="" id="">
          <option value="">Şikayət səbəbi</option>
        </select>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Şikayət et</button>
      </form>
    </div>
  );
}

export default Report;
