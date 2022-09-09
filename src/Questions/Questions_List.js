import React, { useState } from "react";
import "./Questions_List.css";
import { BlogPath } from "../Data/Link_Path.js";
import { Link } from "react-router-dom";
import UseTitle from "../Title.js";
import ReactPaginate from "react-paginate";

function PaginatedItems() {
  const [links] = useState(BlogPath);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const linksPerPage = 8;
  const pagesVisited = pageNumber * linksPerPage;

  const displaylinks = links
    .filter((links) => {
      if (searchTerm === "") {
        return links;
      } else if (links.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return links;
      }
      return false;
    })
    .slice(pagesVisited, pagesVisited + linksPerPage)
    .map((f, index) => {
      return (
        <React.Fragment key={index}>
          <div className="question-list">
            <div>
              <div id="curves" className="line">
                {" "}
                <Link to={f.url} className="question_links">
                  {" "}
                  &nbsp; {f.title}
                </Link>
                <div id="curve1"> </div>
                <span className="arrow-right"> </span>
                &nbsp; {f.description}
              </div>
              <br />
            </div>
          </div>
        </React.Fragment>
      );
    });

  const pageCount = Math.ceil(
    links.filter((links) => {
      if (searchTerm === "") {
        return links;
      } else if (links.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return links;
      }
      return false;
    }).length / linksPerPage
  );

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <p className="input-container">
        <input
          type="search"
          id="filter"
          className="input"
          name="filter"
          spellCheck="true"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handlePageChange({ selected: 0 });
          }}
        />
      </p>
      <div className="blog_list">{displaylinks}</div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}

function Questions_List() {
  UseTitle("Computing Question and Answer");
  return (
    <>
      <div className="fixwidth">
        <div id="container">
          <div id="left">
            <li className="list">
              <Link className="list" to="/">
                {" "}
                Home
              </Link>
              <Link className="list" to="/">
                {" "}
                Home
              </Link>
              <Link className="list" to="/">
                {" "}
                Home
              </Link>
            </li>
          </div>

          <div id="middle">
            <PaginatedItems />
          </div>

          <div id="right" className="right Right_t">
            <br />
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHTT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHTT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHTT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHT SIDE</h1>
            <br />
            <h1>RIGHTT SIDE</h1>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions_List;
