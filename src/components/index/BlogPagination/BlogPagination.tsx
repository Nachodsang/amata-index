import React, { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import BlogCard from "../BlogCard/BlogCard";
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";
import "./BlogPagination.css";

function Items({
  currentItems,
}: // companyData
any) {
  return (
    <div className="desktop0:grid-cols-4 tablet2:grid-cols-2 tablet2:grid flex flex-col items-center gap-y-4 gap-x-0">
      {currentItems &&
        currentItems.map((item: any, index: any) => (
          <BlogCard
            key={index}
            category={""}
            item={item}
            // companyList={companyData}
          />
        ))}
    </div>
  );
}

export default function PaginatedItems({
  itemsPerPage,
  items,
  companyData,
}: any) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  // const [showPagination, setShowPagination] = useState(false);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items
        currentItems={currentItems}
        //  companyData={companyData}
      />
      <ReactPaginate
        activeClassName={"item active "}
        breakClassName={"item break-me "}
        breakLabel={"..."}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        marginPagesDisplayed={2}
        nextClassName={"item next "}
        nextLabel={<AiFillFastForward size={40} color="white" />}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageClassName={"item pagination-page "}
        pageRangeDisplayed={2}
        previousClassName={"item previous"}
        previousLabel={<AiFillFastBackward size={40} color="white" />}
        // nextLabel="next >"
        // onPageChange={handlePageClick}
        // pageRangeDisplayed={3}
        // marginPagesDisplayed={2}
        // pageCount={pageCount}
        // previousLabel="< previous"
        // pageClassName="page-item"
        pageLinkClassName="page-link"
        // previousClassName="page-item"
        previousLinkClassName="page-link"
        // nextClassName="page-item"
        nextLinkClassName="page-link"
        // breakLabel="..."
        // breakClassName="page-item"
        breakLinkClassName="page-link"
        // containerClassName="pagination"
        // activeClassName="active"
        renderOnZeroPageCount={null}
        className={`mt-10 w-full flex justify-center ${
          items.length > 8 ? "flex" : "hidden"
        }`}
      />
    </>
  );
}

// export default function BlogPagination() {
//   return;
// }
